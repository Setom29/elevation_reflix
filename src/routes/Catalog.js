import Movies from "../components/Movies";
import CatalogBar from "../components/CatalogBar";
import { useState } from "react";

export default function Catalog({ moviesList, setMoviesList, usersData, setUsersData }) {
  // const [userMovies, setUserMovies] = useState(moviesList.map((el) => {
  //   return {...el, rented: false}}))
  return (
    <div className="catalog-container">
      <CatalogBar usersData={usersData} moviesList={moviesList} setMoviesList={setMoviesList} />
      {usersData.getActiveUser().rentedMovies.length !== 0 ? (
        <div className="catalog-container__rented">
          <div>Rented:</div>
          <Movies
            usersData={usersData}
            setUsersData={setUsersData}
            moviesList={usersData.getActiveUser().rentedMovies}
          />
        </div>
      ) : null}

      <div className="catalog-container__all">
        <div>Catalog:</div>
        <Movies
          usersData={usersData}
          setUsersData={setUsersData}
          moviesList={moviesList}
        />
      </div>
    </div>
  );
}
