import Balance from "./Balance";
import { useState, useEffect } from "react";
import fetchMovies from "../requests/fetchData";
import { popularMoviesLink, searchMoviesLink } from "../config/constants";

export default function CatalogBar({ usersData, setUsersData }) {
    const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    async function fetchData() {
      let response = [];
      if (searchValue === "") {
        response = await fetchMovies(popularMoviesLink);
      } else {
        response = await fetchMovies(searchMoviesLink + searchValue);
      }
      setUsersData({...usersData, moviesList: response});
    }
    fetchData();
  }, [searchValue]);

  return (
    <div className="catalog-bar-component">
      <input
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Balance usersData={usersData} />
    </div>
  );
}
