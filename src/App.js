import './App.css';
import SampleMovies from './SampleMovies';
// import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      {/* <AddMovie /> */}
      <Filter />
      <MovieList />
      <SampleMovies  />
    </>
  );
}

export default App;

// MovieCard
// MovieList
// Filter ( title, rate)