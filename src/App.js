import './App.css';
import SampleMovies from './SampleMovies';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <Filter />
      <MovieList />
      <SampleMovies  />
    </>
  );
}

export default App;
