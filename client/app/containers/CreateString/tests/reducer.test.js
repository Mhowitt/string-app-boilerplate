import stringCreatorReducer, {
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
  // LOAD_STRINGS_FAIL,
  // UPDATE_STRINGS,
} from '../reducer';

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
      string: 'test',
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
