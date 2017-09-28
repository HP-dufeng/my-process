import { combineEpics } from 'redux-observable';

import authRx from './authRx';
import signinRx from './signinRx';

export default combineEpics(
    authRx,
    signinRx
);
