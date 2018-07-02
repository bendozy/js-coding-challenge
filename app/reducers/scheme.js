import * as types from '../constants';

export default (state = '', action) => {
  switch (action.type) {
    case types.SET_SCHEME:
      return action.scheme;
    case types.GET_SCHEME:
      return state;
    default:
      return state;
  }
};
