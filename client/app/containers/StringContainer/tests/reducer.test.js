import stringLoaderReducer, {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_FAIL,
  // UPDATE_STRINGS,
} from '../reducer';

describe('stringLoaderReducer', () => {
  it('returns the initial state', () => {
    expect(stringLoaderReducer(undefined, {})).toEqual({
      strings: [],
      loading: false,
      error: false,
    });
  });

  it('changes loads Strings', () => {
    expect(
      stringLoaderReducer(undefined, {
        type: LOAD_STRINGS,
      }),
    ).toEqual({
      strings: expect.any(Array),
      loading: true,
      error: false,
    });
  });

  it('changes string array and loading back to false', () => {
    expect(
      stringLoaderReducer(undefined, {
        type: LOAD_STRINGS_SUCCESS,
        payload: [{ id: 1, string: 'test' }],
      }),
    ).toEqual({
      strings: [{ id: 1, string: 'test' }],
      loading: false,
      error: false,
    });
  });

  it('shows there is an error loading stings from API', () => {
    expect(
      stringLoaderReducer(undefined, {
        type: LOAD_STRINGS_FAIL,
      }),
    ).toEqual({
      strings: [],
      loading: false,
      error: true,
    });
  });
});
