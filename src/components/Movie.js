import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageLink } from "../config/constants";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const movieCost = 1;

export default function Movie({ movie, usersData, setUsersData }) {
  const [rentStatus, setRentStatus] = useState(false);

  useEffect(() => {
    if (
      usersData.users[usersData.activeUserId].rentedMovies.find(
        (rentedMovie) => rentedMovie.id === movie.id
      ) !== undefined
    ) {
      setRentStatus(true);
    } else {
      setRentStatus(false);
    }
  }, [usersData]);

  function handleClick() {
    if (rentStatus) {
      //  + -> -
      setUsersData({
        ...usersData,
        users: {
          ...usersData.users,
          [usersData.activeUserId]: {
            ...usersData.users[usersData.activeUserId],
            balance: usersData.users[usersData.activeUserId].balance + movieCost,
            rentedMovies: usersData.users[usersData.activeUserId].rentedMovies.filter(
              (rentedMovie) => rentedMovie.id !== movie.id
            ),
          },
        },
      });
    } else {
      // - -> +

      if (
        usersData.users[usersData.activeUserId].balance - movieCost >= 0 &&
        usersData.users[usersData.activeUserId].rentedMovies.length < 10
      ) {
        setUsersData({
          ...usersData,
          users: {
            ...usersData.users,
            [usersData.activeUserId]: {
              ...usersData.users[usersData.activeUserId],
              balance: usersData.users[usersData.activeUserId].balance - movieCost,
              rentedMovies: [...usersData.users[usersData.activeUserId].rentedMovies, movie],
            },
          },
        });
      }
    }
  }

  return (
    <div className="movie-container">
      <Link to={`/movies/${movie.id}`}><img src={imageLink + movie.poster_path} className="movie-image" /></Link>
      <FontAwesomeIcon
        icon={rentStatus ? faMinus : faPlus}
        className="icon"
        onClick={handleClick}
      />
    </div>
  );
}
