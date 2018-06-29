import reducer from './scheme';
import * as types from '../constants';
import assert from 'assert';

describe('scheme reducer', () => {
  it('should return the initial scheme state', () => {
    assert.strictEqual(reducer(undefined, {}), '');
  });

  it('should handle SET_SCHEME', () => {
    const setAction = {
      type: types.SET_SCHEME,
      scheme: 'http',
    };
    assert.strictEqual(reducer('', setAction), 'http');
  });

  it('should handle GET_SCHEME', () => {
    const getAction = {
      type: types.GET_SCHEME,
    };
    assert.strictEqual(reducer('', getAction), '');
  });
});
