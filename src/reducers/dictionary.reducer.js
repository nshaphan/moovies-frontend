import * as types from '../actions/actionTypes';

const initialState = {
  definitions: [],
  words: [],
  activeDefinitionIndex: 0,
  activeWordIndex: 0,
  activeWord: '',
  activeDefinition: ''
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_DEFINITIONS_SUCCESS:
    return Object.assign({}, state, { definitions: action.definitions });

  case types.SET_ACTIVE_DEFINITION:
    return Object.assign({}, state, { activeDefinition: state.definitions[state.activeDefinitionIndex] });

  case types.WORDS_SELECTION_SUCCESS:
    return Object.assign({}, state, { words: action.words });

  case types.SET_ACTIVE_WORD:
    return Object.assign({}, state, { activeWord: state.words[state.activeWordIndex] });

  case types.SET_ACTIVE_WORD_INDEX:
    return Object.assign({}, state, { activeWordIndex: action.index });

  case types.SET_ACTIVE_DEFINITION_INDEX:
    return Object.assign({}, state, { activeDefinitionIndex: action.index });

  default:
    return state;
  }
};

export default dictionaryReducer;
