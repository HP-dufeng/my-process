
import 'rxjs';
import { combineEpics } from 'redux-observable';

import authRx from '../../auth/epics';

export default combineEpics(
    authRx,
);
