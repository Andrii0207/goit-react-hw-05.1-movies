import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetailById } from '../../service/moviesAPI';
import defaultImage from '../../service/defaultImage.png';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { id } = useParams();
  const MovieId = id.slice(1, id.length);

  useEffect(() => {
    getMovieDetailById(MovieId).then(({ data }) => setMovie(data));
  }, [MovieId]);

  const { poster_path, title, release_date, original_title, overview, genres } =
    movie;
  const baseImagePathURL = 'https://image.tmdb.org/t/p/w500/';

  if (!movie) {
    return null;
  }

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        <img
          src={poster_path ? baseImagePathURL + `${poster_path}` : defaultImage}
          alt={title}
          style={{ width: '300px' }}
        />
        <b>
          <p>
            {original_title} (
            {release_date ? release_date.slice(0, 4) : release_date})
          </p>
        </b>
        <b>
          <p>OverView</p>
        </b>
        <p>{overview}</p>
        <b>
          <p>Genres</p>
        </b>
        <p>
          {genres && genres.length > 0
            ? genres.map(({ name }) => name).join(', ')
            : 'There are no genres'}
        </p>
      </div>
      <b>
        <p>Additional information</p>
      </b>
      <NavLink to="cast" state={{ from: location }}>
        <p>Cast</p>
      </NavLink>
      <NavLink to="reviews" state={{ from: location }}>
        <p>Reviews</p>
      </NavLink>
      <Suspense fallback={<div>Loading... wait please</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
