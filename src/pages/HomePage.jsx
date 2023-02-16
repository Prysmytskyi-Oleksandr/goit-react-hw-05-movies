import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesTrending } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesTrending().then(setMovies);
  }, []);
  console.log(movies);

  const elList = movies.map(movie => (
    <Link key={movie.id} to={`/movies/${movie.id}`}>
      <li>{movie.title}</li>
    </Link>
  ));

  return (
    <>
      <h2>Trending today</h2>
      <ol>{elList}</ol>
    </>
  );
};

export default HomePage;
