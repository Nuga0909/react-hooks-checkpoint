import MovieCard from "./MovieCard";
import moviesObj from "../moviesObj";
import React, { useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState(moviesObj);

    const handleDelete = (key) => {
        const newMovies = movies.filter((_, n) => n !== key);
        setMovies(newMovies);
    }


    return (
        <div className="cont">
            {movies.map((movie, key) => (
                <MovieCard
                    title={movie.title}
                    description={movie.description}
                    posterUrl={movie.posterUrl}
                    rating={movie.rating}
                    del={() => handleDelete(key)}
                />
            ))}
        </div>
    );
};

export default MovieList;
