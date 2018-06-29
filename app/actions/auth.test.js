import * as authActions from './auth';
import * as types from '../constants';
import assert from 'assert';

describe('auth actions', () => {
  it('should dispatch the getAuthKey action', () => {
    const expectedAction = {
      type: types.GET_AUTHKEY,
    };

    assert.deepEqual(authActions.getAuthKey(), expectedAction);
  });

  it('should handle the getAuthKey action', () => {
    const authKey = 'test';
    const expectedAction = {
      type: types.SET_AUTHKEY,
      authKey,
    };

    assert.deepEqual(authActions.setAuthKey(authKey), expectedAction);
  });
});
