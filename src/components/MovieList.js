// import InputGroup from 'react-bootstrap/InputGroup';
import MovieCard from "./MovieCard";
import moviesObj from "../moviesObj";
import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';

const MovieList = () => {
    const [movies, setMovies] = useState(moviesObj);
    const [newMovie, setNewMovie] = useState('');

    const handleDelete = (key) => {
        const newMovies = movies.filter((_, n) => n !== key);
        setMovies(newMovies);
    }

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.id]: e.target.value });
        // setMovies(...movies, ...newMovie);
        // setNewMovie(movies.push(title = { e.target.movie.title }
        //     description = { movie.description }
        //     posterUrl = { movie.posterUrl }
        //     rating = { movie.rating }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, newMovie]);

        console.log(newMovie);
    };

    return (
        <>
            {/* <div className='filter-cont'>
                <InputGroup className="mb-3" onSubmit={(e)=>handleAdd(e)}>
                    <InputGroup.Text >Add a new movie</InputGroup.Text>
                    <Form.Control aria-label="Title" placeholder='Title' />
                    <Form.Control aria-label="Description" placeholder='Description' />
                    <Form.Control aria-label="PosterURL" placeholder='PosterURL' />
                    <Form.Control aria-label="Rating" placeholder='Rating' />
                </InputGroup>
            </div > */}

            <form onSubmit={handleSubmit} className='cont'>
                <div className="input-group">
                    <label htmlFor="title">title</label>
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
                    />
                ))}
            </div>
        </>

    );
};

export default MovieList;
