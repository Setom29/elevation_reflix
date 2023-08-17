import { useEffect, useState } from "react";
import { imageLink } from "../config/constants";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const movieCost = 1;

export default function Movie({ movie, user, setUser }) {
  const [rentStatus, setRentStatus] = useState(
    false ||
      user.rentedMovies.find((rentedMovie) => rentedMovie.id === movie.id) !==
        undefined
  );

  function handleClick() {
    if (rentStatus) {
      // + -> -
      setRentStatus(false);
      setUser({
        ...user,
        balance: user.balance + movieCost,
        rentedMovies: user.rentedMovies.filter(
          (rentedMovie) => rentedMovie.id !== movie.id
        ),
      });
    } else {
      // - -> +

      if (user.balance - movieCost > 0 && user.rentedMovies.length < 10) {
        setRentStatus(true);
        setUser({
          ...user,
          balance: user.balance - movieCost,
          rentedMovies: [...user.rentedMovies, movie],
        });
      }
    }
  }

  return (
    <div className="movie-container">
      <img src={imageLink + movie.poster_path} className="movie-image" />
      <FontAwesomeIcon
        icon={rentStatus ? faMinus : faPlus}
        className="icon"
        onClick={handleClick}
      />
    </div>
  );
}
