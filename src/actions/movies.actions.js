import * as types from './actionTypes';

export const getMoviesSuccess = (movies) => {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movies
  };
};

export const setRandomMovie = (movie) => {
  return {
    type: types.SET_ACTIVE_MOVIE,
    movie
  };
};
