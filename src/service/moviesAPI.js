import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '430ce39ddbb6d767664f5ab1d9d53645';

export const getTrendingMovies = () => {
  return axios('trending/movie/week', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovieByName = name => {
  return axios(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: name,
    },
  });
};

export const getMovieDetailById = id => {
  return axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovieCast = id => {
  return axios(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovieReviews = id => {
  return axios(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
