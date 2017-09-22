import { combineEpics } from 'redux-observable';

import authRx from './authRx';

export default combineEpics(
    authRx,
);
