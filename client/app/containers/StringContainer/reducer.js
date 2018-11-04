import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_FAIL,
} from './constants';

const initialState = {
  strings: [],
  loading: false,
  error: false,
};

export default function stringLoaderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_STRINGS:
      return { ...state, loading: true };
    case LOAD_STRINGS_SUCCESS:
      return { ...state, loading: false, strings: action.payload };
    case LOAD_STRINGS_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
