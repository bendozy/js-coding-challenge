import * as types from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case types.SET_AUTHKEY:
      return action.authKey;
    case types.GET_AUTHKEY:
      return state;
    default:
      return state;
  }
};
