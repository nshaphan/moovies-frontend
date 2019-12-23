import * as types from '../actions/actionTypes';

const initialState = {
  movies: [],
  activeMovie: {}
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_MOVIES_SUCCESS:
    return Object.assign({}, state, { movies: action.movies });

  case types.SET_ACTIVE_MOVIE:
    const randomMovie = Math.floor(Math.random() * state.movies.length);
    return Object.assign({}, state, { activeMovie: state.movies[randomMovie] });

  default:
    return state;
  }
};

export { initialState, movieReducer };
