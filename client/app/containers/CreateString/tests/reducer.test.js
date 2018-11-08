import {
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
  // CREATE_STRING_FAIL,
  // UPDATE_STRINGS,
} from '../constants';
import stringCreatorReducer from '../reducer';

describe('stringCreatorReducer', () => {
  it('returns the initial state', () => {
    expect(stringCreatorReducer(undefined, {})).toEqual({
      loading: false,
      error: false,
    });
  });

  it('creating a string changes loading', () => {
    expect(
      stringCreatorReducer(undefined, {
        type: CREATE_STRING,
        payload: 'test',
      }),
    ).toEqual({
      loading: true,
      error: false,
    });
  });

  it('changes string array and loading back to false', () => {
    expect(
      stringCreatorReducer(undefined, {
        type: CREATE_STRING_SUCCESS,
        payload: { string: 'test' },
      }),
    ).toEqual({
      loading: false,
      error: false,
    });
  });
});
