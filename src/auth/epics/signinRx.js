import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { SIGNIN } from '../actions/actionTypes';
import { authenticated, authError } from '../actions/authActions';
import * as auth from '../util/authHelper';

import getOriginPath from '../util/get_origin_path';

export default (action$) => {
    return action$.ofType(SIGNIN)
        .map(action => action.payload)
        .switchMap(({ username, password }) => auth.signin(username, password) )
        .mergeMap(response => Observable.merge(
            Observable.of(authenticated(response)),
            Observable.of(getOriginPath())
                .map(path => push(path))
        ))
        .catch(error => Observable.of(authError(error.message)));
}