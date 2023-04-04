import { Link, useLocation } from 'react-router-dom';
import defaultImage from '../../service/defaultImage.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) {
    return null;
  }
  const baseImageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`/movies/:${id}`} state={{ from: location }}>
            <img
              src={poster_path ? baseImageURL + `${poster_path}` : defaultImage}
              alt={title}
              style={{ width: '200px' }}
            />
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
