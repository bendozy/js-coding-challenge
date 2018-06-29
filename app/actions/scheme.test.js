import * as schemeActions from './scheme';
import * as types from '../constants';
import assert from 'assert';

describe('scheme actions', () => {
  it('should dispatch the getScheme action', () => {
    const expectedAction = {
      type: types.GET_SCHEME,
    };

    assert.deepEqual(schemeActions.getScheme(), expectedAction);
  });

  it('should dispatch the setScheme action', () => {
    const scheme = 'test';
    const expectedAction = {
      type: types.SET_SCHEME,
      scheme,
    };

    assert.deepEqual(schemeActions.setScheme(scheme), expectedAction);
  });
});
