import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCastById } from 'services/api';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  console.log(cast);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await fetchMoviesCastById(id);
        setCast(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchCast();
  }, [id]);

  const element = cast.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt="foto"
          width="150"
        />
      )}

      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      <ul>{element.length === 0 ? "We don't have any foto" : element}</ul>
    </>
  );
};

export default CastPage;
