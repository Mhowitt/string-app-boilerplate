import { createString } from '../actions';
import { CREATE_STRING } from '../constants';

describe('CreateString Container actions', () => {
  describe('Create String Action', () => {
    it('has a type of CREATE_STRING', () => {
      const expected = {
        type: CREATE_STRING,
        payload: 'test',
      };
      expect(createString('test')).toEqual(expected);
    });
  });
});
