import { loadStrings } from '../actions';
import { LOAD_STRINGS } from '../constants';

describe('StringContainer actions', () => {
  describe('Load Strings Action', () => {
    it('has a type of LOAD_STRINGS', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });
});
