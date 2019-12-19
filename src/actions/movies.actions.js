import * as types from './actionTypes';

export const getMoviesSuccess = (movies) => {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movies
  };
};

export const setRandomMovie = () => {
  return {
    type: types.SET_ACTIVE_MOVIE
  };
};
