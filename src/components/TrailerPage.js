import React from 'react'
import { Link, useParams } from 'react-router-dom';
import moviesObj from '../moviesObj';

function TrailerPage() {
    const { movieId } = useParams();
    const movie = moviesObj[movieId];

    return (
        <div>
            <h2>Trailer Page</h2>
            <p>{movie && movie.description}</p>
            <a href={movie && movie.trailerLink}>trailer</a>
            <br />
            <br />
            <Link to='/'>Back to home</Link>
        </div>
    );
}

export default TrailerPage;
