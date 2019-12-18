import { combineReducers } from 'redux';
import movieReducer from './movies.reducer';
import dictionaryReducer from './dictionary.reducer';

const reducers = combineReducers({
  movieState: movieReducer,
  dictionaryState: dictionaryReducer
});

export default reducers;
