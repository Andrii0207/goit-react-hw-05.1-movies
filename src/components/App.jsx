import { Route, Routes } from 'react-router-dom';
// import { getTrendingMovies } from '../service/moviesAPI';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
