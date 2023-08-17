import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReflixNavBar from "./components/ReflixNavBar";
import Catalog from "./routes/Catalog";
import Home from "./routes/Home";
import MovieDescription from "./routes/MovieDescription";
import { defaultUser } from "./config/constants";
import { usersData } from "./config/constants";
import { MoviesListAPILink } from "./config/constants"
import fetchMovies from "./requests/fetchData"


function App() {
  const [user, setUser] = useState(defaultUser);
  const [moviesList, setMoviesList] = useState([])
  async function fetchData() {
      const response = await fetchMovies(MoviesListAPILink);
      setMoviesList(response.results.slice(0, 10))
      console.log(response.results.slice(0, 10))
    }
  useEffect(() => {
      fetchData();
    }, []);
  useEffect(()=>console.log(user), [user])
  return (
    <Router>
      <div className="App">
        <ReflixNavBar setUser={setUser}/>
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<Home users={usersData} setUser={setUser} moviesList={moviesList}/>}
            />
            <Route path="/catalog" element={<Catalog user={user} setUser={setUser} moviesList={moviesList}/>} />
            <Route path="/movies/:id" element={<MovieDescription />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
