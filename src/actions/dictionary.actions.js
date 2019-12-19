import * as types from './actionTypes';

export const getDefinifitonssSuccess = (definitions) => {
  return {
    type: types.GET_DEFINITIONS_SUCCESS,
    definitions
  };
};

export const setActiveWord = () => {
  return {
    type: types.SET_ACTIVE_WORD
  };
};

export const setActiveDefinition = () => {
  return {
    type: types.SET_ACTIVE_DEFINITION
  };
};

export const wordsSelectedSuccess = (selection) => {
  return {
    type: types.WORDS_SELECTED_SUCCESS,
    selection
  };
};
