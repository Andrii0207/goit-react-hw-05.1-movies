import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/moviesAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();

  const MovieId = Number(params.id.slice(1, params.length));

  useEffect(() => {
    getMovieReviews(MovieId)
      .then(resp => setReviews(resp.data.results))
      .catch(err => setError(err.message));
  }, [MovieId]);

  console.log(reviews);

  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {reviews.map(item => (
        <li key={item.id}>
          <b>
            <p>Author: {item.author}</p>
          </b>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
