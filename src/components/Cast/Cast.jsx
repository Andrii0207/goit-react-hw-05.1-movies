import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/moviesAPI';
import defaultImage from '../../service/defaultImage.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const MovieId = Number(id.slice(1, id.length));

  useEffect(() => {
    getMovieCast(MovieId)
      .then(resp => setCast(resp.data.cast))
      .catch(err => setError(err));
  }, [MovieId]);

  const castImageURL = 'https://image.tmdb.org/t/p/w500';

  if (!cast) {
    return null;
  }

  return (
    <div>
      <ul>
        {cast.map(({ profile_path, id, original_name, character }) => (
          <li key={id}>
            <img
              src={
                profile_path ? castImageURL + `${profile_path}` : defaultImage
              }
              alt={original_name}
              style={{ width: '200px' }}
            />
            <b>
              <p>{original_name}</p>
            </b>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
