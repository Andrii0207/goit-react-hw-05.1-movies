import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'service/moviesAPI';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();

  const getMovieValueName = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const query = searchParams.get('query');

  useEffect(() => {
    getMovieByName(query)
      .then(resp => setMovie(resp.data.results))
      .catch(err => setError(err));
  }, [query]);

  if (!movies) {
    return null;
  }

  return (
    <div>
      <Search onChange={getMovieValueName} />
      {!error && <MoviesList movies={movies} state={{ from: location }} />}
    </div>
  );
};

export default Movies;
