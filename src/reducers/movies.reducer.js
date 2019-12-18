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
    return Object.assign({}, state, { activeMovie: action.movie });

  default:
    return state;
  }
};

export default movieReducer;
