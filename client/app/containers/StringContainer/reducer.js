import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_FAIL,
  UPDATE_STRINGS,
} from './constants';

export const initialState = {
  strings: [],
  loading: false,
  error: false,
};

/* TODO ADD MORE ERROR HANDLING */

export default function stringLoaderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_STRINGS:
      return { ...state, loading: true };
    case LOAD_STRINGS_SUCCESS:
      return { ...state, loading: false, strings: action.payload };
    case LOAD_STRINGS_FAIL:
      return { ...state, loading: false, error: true };
    case UPDATE_STRINGS:
      return {
        ...state,
        strings: [...state.strings, { string: action.payload }],
      };
    default:
      return state;
  }
}
