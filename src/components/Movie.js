import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageLink } from "../config/constants";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ReflixModal from "./ReflixModal";
const movieCost = 1;

export default function Movie({
  movie,
  usersData,
  setUsersData,
  setClickedMovie,
}) {
  const [rentStatus, setRentStatus] = useState(
    usersData.getActiveUser().rentedMovies.find((el) => el.id === movie.id)
      ? true
      : false
  );

  useEffect(() => {
    if (
      usersData
        .getActiveUser()
        .rentedMovies.find((rentedMovie) => rentedMovie.id === movie.id) !==
      undefined
    ) {
      setRentStatus(true);
    } else {
      setRentStatus(false);
    }
  }, [usersData]);

  function handleClick() {
    if (rentStatus) {
      // console.log("- -> +")
      setUsersData({
        ...usersData,
        users: {
          ...usersData.users,
          [usersData.activeUserId]: {
            ...usersData.getActiveUser(),
            balance: usersData.getActiveUser().balance + movieCost,
            rentedMovies: usersData
              .getActiveUser()
              .rentedMovies.filter(
                (rentedMovie) => rentedMovie.id !== movie.id
              ),
          },
        },
      });
    } else {
      // console.log("+ -> -")
      if (
        usersData.getActiveUser().balance - movieCost >= 0 &&
        usersData.getActiveUser().rentedMovies.length < 10
      ) {
        setUsersData({
          ...usersData,
          users: {
            ...usersData.users,
            [usersData.activeUserId]: {
              ...usersData.getActiveUser(),
              balance: usersData.getActiveUser().balance - movieCost,
              rentedMovies: [...usersData.getActiveUser().rentedMovies, movie],
            },
          },
        });
        setClickedMovie(movie);
      }
    }
  }

  return (
    <div className="movie-container">
      <div className="movie-container__movie">
        <Link to={`/movies/${movie.id}`}>
          <img src={imageLink + movie.poster_path} className="movie-image" />
        </Link>
        <FontAwesomeIcon
          icon={rentStatus ? faMinus : faPlus}
          className="icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
