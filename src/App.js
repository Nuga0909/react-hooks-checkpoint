import './App.css';
import { Routes, Route } from 'react-router-dom';
import SampleMovies from './SampleMovies';
import MovieList from './components/MovieList';
import TrailerPage from './components/TrailerPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MovieList />}>
        </Route>
        <Route path='/trailer' element={<TrailerPage />}>
        </Route>
      </Routes>
      <SampleMovies />
    </>
  );
}

export default App;
