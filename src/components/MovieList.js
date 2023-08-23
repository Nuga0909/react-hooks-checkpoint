import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import moviesObj from "../moviesObj";
import React, { useState } from "react";
import Filter from "./Filter";

const MovieList = () => {
  const [movies, setMovies] = useState(moviesObj);
  const [newMovie, setNewMovie] = useState("");

  const handleDelete = (key) => {
    const newMovies = movies.filter((_, n) => n !== key);
    setMovies(newMovies);
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
  };

  function handleFilter(search) {
    let filteredMovie = movies.filter((value) =>
      value.title.toLowerCase().includes(search.toLowerCase())
    );
    setMovies(filteredMovie);
  }

  // function handleClick(key) {
  //     <TrailerPage />
  // }

  const navigate = useNavigate();

  const navigateToTrailerPage = (key) => {
    // <TrailerPage description={movies.key.description} />;
    // <Routes>
    //     <Route path='/trailer' element={<TrailerPage description={movies.description} />}>
    //     </Route>
    //   </Routes>
    navigate("/trailer");
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />

      <form onSubmit={handleSubmit} className="my-form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={newMovie.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={newMovie.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="posterUrl">PosterUrl</label>
          <input
            id="posterUrl"
            value={newMovie.posterUrl || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            value={newMovie.rating || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Add A New Movie
        </button>
      </form>

      <div className="cont">
        {movies.map((movie, key) => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
            del={() => handleDelete(key)}
            trailer={() => navigateToTrailerPage(key)}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
