import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import * as auth from '../util/authHelper';
import * as ActionTypes from '../actions/actionTypes';
import { authenticated, unauthenticated } from '../actions/authActions';

import getOriginPath from '../util/get_origin_path';

export default function(action$) {
  return action$.ofType(ActionTypes.CHECKED_IS_LOGIN)
    .switchMap(() => auth.isAuthenticated())
    .mergeMap(result => Observable.merge(
      Observable.of(result.authenticated ? authenticated(result) : unauthenticated()),
      Observable.of(result.authenticated)
          .filter(authenticated => authenticated)
          .mapTo(getOriginPath())
          .map(path => push(path))
    ));
}
