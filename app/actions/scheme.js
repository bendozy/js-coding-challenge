import * as types from '../constants';

export const setScheme = scheme => ({ type: types.SET_SCHEME, scheme });

export const getScheme = () => ({ type: types.GET_SCHEME });
