import React from "react";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/fakeMovieService";

function DataTable() {
  const [movies, setMovies] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    setMovies(...movies, getMovies());
    console.log(movies);
  }, []);

  return (
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>test</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>sit</td>
            <td>sit</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
