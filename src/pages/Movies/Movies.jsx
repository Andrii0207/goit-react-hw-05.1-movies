import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'service/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  const searchMovieByName = evt => {
    evt.preventDefault();
    const data = evt.target.value;
    console.log(data);

    if (!data) {
      return alert('Please enter movie name');
    }

    getMovieByName(data).then(resp => console.log(resp.data));
  };

  //   useEffect(() => {
  //     if (!query) {
  //       return alert('Please enter movie name');
  //     }
  //     getMovieByName(query).then(resp => console.log(resp.data));
  //   }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Enter movie name"
        onChange={updateQueryString}
      />
      <button type="submit" onChange={searchMovieByName}>
        Search
      </button>
      Movies page
    </div>
  );
};

export default Movies;
