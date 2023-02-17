import { fetchMoviesSerch } from 'services/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('searchName');
  console.log(searchName);

  useEffect(() => {
    if (!searchName) {
      return;
    }
    fetchMoviesSerch(searchName).then(setMovies);
  }, [searchName]);

  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    const onform = event.currentTarget;
    setSearchParams({ searchName: onform.elements.searchName.value });
    onform.reset(movies);
  };

  const moviesList = movies.map(movie => (
    <Link key={movie.id} to={`/movies/${movie.id}`} state={{ from: location }}>
      <li>{movie.title}</li>
    </Link>
  ));
  console.log(moviesList);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchName"></input>
        <button type="Submit">Search</button>
      </form>
      <ul>{moviesList}</ul>
    </>
  );
};

export default MoviesPage;
