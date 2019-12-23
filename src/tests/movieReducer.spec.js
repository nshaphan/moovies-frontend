/* eslint-disable no-undef */
import { movieReducer, initialState } from "../reducers/movies.reducer";
import "@testing-library/jest-dom/extend-expect";
import { GET_MOVIES_SUCCESS, SET_ACTIVE_MOVIE } from "../actions/actionTypes";

describe('Movies reducer', () => {
  test('Initial test', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });
  test('GET_DEFINITIONS_SUCCESS', () => {
    expect(movieReducer(initialState, {
      type: GET_MOVIES_SUCCESS,
      movies: [{
        show: {
          name: 'Google',
          summary: 'Google is a search engine'
        }
      }]
    })).toEqual({
      movies: [{
        show: {
          name: 'Google',
          summary: 'Google is a search engine'
        }
      }],
      activeMovie: {}
    });
  });

  test('SET_ACTIVE_MOVIE', () => {
    expect(movieReducer({
      movies: [{
        show: {
          name: 'Google',
          summary: 'Google is a search engine'
        }
      }],
      activeMovie: {}
    }, {
      type: SET_ACTIVE_MOVIE
    })).toEqual({
      movies: [{
        show: {
          name: 'Google',
          summary: 'Google is a search engine'
        }
      }],
      activeMovie: {
        show: {
          name: 'Google',
          summary: 'Google is a search engine'
        }
      }
    });
  });
});
