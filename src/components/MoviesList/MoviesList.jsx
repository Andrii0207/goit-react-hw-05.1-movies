import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log('location', location);
  console.log(movies);

  const baseImageURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`/movies/:${id}`} state={{ from: location }}>
            <img
              src={baseImageURL + `${poster_path}`}
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
