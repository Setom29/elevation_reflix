import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReflixNavBar from "./components/ReflixNavBar";
import Catalog from "./routes/Catalog";
import Home from "./routes/Home";
import MovieDescription from "./routes/MovieDescription";
import { initialUsersData, MoviesListAPILink } from "./config/constants";

function App() {
  const [usersData, setUsersData] = useState(initialUsersData);
  return (
    <Router>
      <div className="App">
        <ReflixNavBar usersData={usersData} setUsersData={setUsersData} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  usersData={usersData}
                  setUsersData={setUsersData}
                />
              }
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  usersData={usersData}
                  setUsersData={setUsersData}
                />
              }
            />
            <Route path="/movies/:id" element={<MovieDescription usersData={usersData}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
