import MovieCard from "./MovieCard";
import moviesObj from "../moviesObj";

const MovieList = () => {
  return (
    <div className="cont">
      {moviesObj.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
