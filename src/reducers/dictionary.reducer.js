import * as types from '../actions/actionTypes';

const initialState = {
  definitions: [],
  activeDefinition: {}
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_DEFINITIONS_SUCCESS:
    return Object.assign({}, state, { definitions: action.definitions });

  case types.SET_ACTIVE_DEFINITION:
    return Object.assign({}, state, { activeDefinition: action.definition });

  default:
    return state;
  }
};

export default dictionaryReducer;
