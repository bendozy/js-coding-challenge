import { combineReducers } from 'redux';

import swagger from './swagger';
import scheme from './scheme';
import auth from './auth';

export default combineReducers({ swagger, scheme, auth });
