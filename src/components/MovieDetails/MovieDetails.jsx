import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailById } from '../../service/moviesAPI';
import defaultImage from '../../service/defaultImage.png';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const MovieId = id.slice(1, id.length);
  console.log(MovieId);

  useEffect(() => {
    getMovieDetailById(MovieId).then(({ data }) => setMovie(data));
  }, [MovieId]);

  console.log(movie);

  const { poster_path, title, release_date, original_title, overview, genres } =
    movie;
  const baseImagePathURL = 'https://image.tmdb.org/t/p/w500/';

  return (
    // <div>movie details</div>
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
          ? genres.map(({ name }) => name).join(',')
          : 'There are no genres'}
      </p>
    </div>
  );
};
