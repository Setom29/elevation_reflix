import Movies from "../components/Movies";
import CatalogBar from "../components/CatalogBar";

export default function Catalog({ moviesList, user, setUser }) {
  console.log(user.rentedMovies.length);
  return (
    <div className="catalog-container">
      <CatalogBar user={user} />
      {user.rentedMovies.length !== 0 ? (
        <div className="catalog-container__rented">
          <div>Rented:</div>
          <Movies user={user} setUser={setUser} moviesList={user.rentedMovies} />
        </div>
      ) : null}

      <div className="catalog-container__all">
        <div>Catalog:</div>
        <Movies user={user} setUser={setUser} moviesList={moviesList} />
      </div>
    </div>
  );
}
