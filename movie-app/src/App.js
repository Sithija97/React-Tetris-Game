import React, { useState, useEffect } from "react";
import SearchIcon from './search.svg'
import './App.css';
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const API_URL = 'http://www.omdbapi.com?apikey=8daa43b7';

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("BatMan")
  }, [])


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for Movies"
        />
        <img
          src={SearchIcon}
          alt="search"
        />
      </div>
      {movies.length > 0 ?
        (<div className="container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>) :

        (<div className="empty">
          <h2> No Movies found</h2>
        </div>)}
    </div>
  );
}

export default App;
