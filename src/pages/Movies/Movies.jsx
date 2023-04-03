import { Search } from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'service/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);

  const getMovieValueName = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const query = searchParams.get('query');

  useEffect(() => {
    getMovieByName(query).then(resp => console.log(resp.data.results));
  }, [query]);

  return <Search onChange={getMovieValueName} />;
};

export default Movies;
