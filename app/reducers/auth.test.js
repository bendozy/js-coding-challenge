import reducer from './auth';
import * as types from '../constants';
import assert from 'assert';

describe('auth reducer', () => {
  it('should return the initial scheme state', () => {
    assert.strictEqual(reducer(undefined, {}), '');
  });

  it('should handle SET_AUTHKEY', () => {
    const setAction = {
      type: types.SET_AUTHKEY,
      authKey: '123',
    };
    assert.strictEqual(reducer('', setAction), '123');
  });

  it('should handle GET_AUTHKEY', () => {
    const getAction = {
      type: types.GET_AUTHKEY,
    };
    assert.strictEqual(reducer('', getAction), '');
  });
});
