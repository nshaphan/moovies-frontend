/* eslint-disable no-undef */
import { dictionaryReducer, initialState } from "../reducers/dictionary.reducer";
import "@testing-library/jest-dom/extend-expect";
import {
  GET_DEFINITIONS_SUCCESS,
  SET_ACTIVE_DEFINITION,
  SET_ACTIVE_WORD,
  SET_ACTIVE_WORD_INDEX,
  SET_ACTIVE_DEFINITION_INDEX,
  WORDS_SELECTION_SUCCESS
} from "../actions/actionTypes";

describe('dictionary reducer', () => {
  test('Initial test', () => {
    expect(dictionaryReducer(undefined, {})).toEqual(initialState);
  });

  test('GET_DEFINITIONS_SUCCESS', () => {
    expect(dictionaryReducer(initialState, {
      type: GET_DEFINITIONS_SUCCESS,
      definitions: [{
        definition: "transform",
        word: "",
        example: ""
      }]
    })).toEqual({
      definitions: [{
        definition: "transform",
        word: "",
        example: ""
      }],
      words: [],
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: '',
      activeDefinition: ''
    });
  });

  test('SET_ACTIVE_DEFINITION', () => {
    expect(dictionaryReducer({
      definitions: [
        {
          definition: "transform",
          word: "",
          example: ""
        }
      ],
      words: [],
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: '',
      activeDefinition: ''
    }, {
      type: SET_ACTIVE_DEFINITION,
      definitions: [
        {
          definition: "transform",
          word: "",
          example: ""
        }
      ]
    })).toEqual({
      definitions: [
        {
          definition: "transform",
          word: "",
          example: ""
        }
      ],
      words: [],
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: '',
      activeDefinition: {
        definition: "transform",
        word: "",
        example: ""
      }
    });
  });

  test('WORDS_SELECTION_SUCCESS', () => {
    expect(dictionaryReducer(
      {
        words: ['danger'],
        definitions: [],
        activeDefinitionIndex: 0,
        activeWordIndex: 0,
        activeWord: ''
      },
      {
        type: WORDS_SELECTION_SUCCESS,
        words: ['danger']
      })).toEqual({
      definitions: [],
      words: ['danger'],
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: ''
    });
  });

  test('SET_ACTIVE_WORD', () => {
    expect(dictionaryReducer(
      {
        words: ['danger'],
        definitions: [],
        activeDefinitionIndex: 0,
        activeWordIndex: 0,
        activeWord: '',
        activeDefinition: ''
      }, {
        type: SET_ACTIVE_WORD
      })).toEqual({
      definitions: [],
      words: ['danger'],
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: 'danger',
      activeDefinition: ''
    });
  });

  test('SET_ACTIVE_WORD_INDEX', () => {
    expect(dictionaryReducer(
      {
        words: '',
        definitions: [],
        activeDefinitionIndex: 0,
        activeWordIndex: 0,
        activeWord: '',
        activeDefinition: ''
      }, {
        type: SET_ACTIVE_WORD_INDEX,
        index: 0
      })).toEqual({
      definitions: [],
      words: '',
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: '',
      activeDefinition: ''
    });
  });

  test('SET_ACTIVE_DEFINITION_INDEX', () => {
    expect(dictionaryReducer(
      {
        words: '',
        definitions: [],
        activeDefinitionIndex: 0,
        activeWordIndex: 0,
        activeWord: '',
        activeDefinition: ''
      }, {
        type: SET_ACTIVE_DEFINITION_INDEX,
        index: 0
      })).toEqual({
      definitions: [],
      words: '',
      activeDefinitionIndex: 0,
      activeWordIndex: 0,
      activeWord: '',
      activeDefinition: ''
    });
  });
});
