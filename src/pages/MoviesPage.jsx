import { fetchMoviesSerch } from 'services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movies.searchName) {
      return;
    }
    fetchMoviesSerch(movies.searchName).then(setMovies);
  }, [movies.searchName]);

  const handleSubmit = event => {
    event.preventDefault();
    const onform = event.currentTarget;
    setMovies({ searchName: onform.elements.searchName.value });
    onform.reset(movies);
  };

  const elList = movies.map(movie => (
    <Link key={movie.id} to={`/movies/${movie.id}`}>
      <li>{movie.title}</li>
    </Link>
  ));
  console.log(elList);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchName"></input>
        <button type="Submit">Search</button>
      </form>
      <ul>{elList}</ul>
    </>
  );
};

export default MoviesPage;
