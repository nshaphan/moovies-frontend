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

export const setActiveDefinitionIndex = (index) => {
  return {
    type: types.SET_ACTIVE_DEFINITION_INDEX,
    index
  };
};

export const setActiveDefinition = () => {
  return {
    type: types.SET_ACTIVE_DEFINITION
  };
};

export const setActiveWordIndex = (index) => {
  return {
    type: types.SET_ACTIVE_WORD_INDEX,
    index
  };
};


export const wordsSelectionSuccess = (words) => {
  return {
    type: types.WORDS_SELECTION_SUCCESS,
    words
  };
};
