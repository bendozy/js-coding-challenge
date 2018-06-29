import * as types from '../constants';

export const setAuthKey = authKey => ({ type: types.SET_AUTHKEY, authKey });

export const getAuthKey = () => ({ type: types.GET_AUTHKEY });
