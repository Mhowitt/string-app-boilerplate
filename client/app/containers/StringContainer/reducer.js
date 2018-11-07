export const LOAD_STRINGS = 'LOAD_STRINGS';
export const LOAD_STRINGS_SUCCESS = 'LOAD_STRINGS_SUCCESS';
export const LOAD_STRINGS_FAIL = 'LOAD_STRINGS_FAIL';
export const UPDATE_STRINGS = 'UPDATE_STRINGS';

export const initialState = {
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
    case UPDATE_STRINGS:
      return {
        ...state,
        strings: [...state.strings, { string: action.payload }],
      };
    default:
      return state;
  }
}
