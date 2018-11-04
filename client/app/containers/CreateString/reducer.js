import {
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
  CREATE_STRING_FAIL,
} from './constants';

const initialState = {
  loading: false,
  error: false,
};

export default function stringCreatorReducer(
  state = initialState,
  action = {},
) {
  switch (action.type) {
    case CREATE_STRING:
      return { ...state, loading: true };
    case CREATE_STRING_SUCCESS:
      return { ...state, loading: false };
    case CREATE_STRING_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
