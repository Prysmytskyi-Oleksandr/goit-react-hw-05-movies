import { useState, useEffect } from 'react';
import { fetchMoviesDetailsById } from 'services/api';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesDetailsById(id);
        setMovieDetails(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovies();
  }, [id]);

  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
          alt="poster"
          width="250"
        />
        <section>
          <h2>{movieDetails?.title}</h2>
          <p>User Score: {Math.round(movieDetails?.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p> {movieDetails?.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails?.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      </div>
      <div>
        <h2>Additional information</h2>
      </div>
    </>
  );
};

export default MovieDetailsPage;
