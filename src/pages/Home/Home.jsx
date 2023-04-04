import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../service/moviesAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <div>
      {!error && (
        <>
          <h2>Trending today</h2>
          <MoviesList movies={movies} />
        </>
      )}
    </div>
  );
};

export default Home;
