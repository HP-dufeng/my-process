import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import { isAuthenticated } from '../authHelper';
import * as ActionTypes from '../actions/actionTypes';
import { authenticated } from '../actions/authActions';

export default function(action$) {
  return action$.ofType(ActionTypes.CHECKED_IS_LOGIN)
    // If you wanted to do an actual access check you
    // could do so here then filter by failed checks.
    .mergeMap(() => Observable.merge(
      Observable.of(isAuthenticated())
        .filter(authenticated => authenticated)
        .map(authenticated)
      // ,
      // Observable.timer(2000)
      //   .map(() => push('/'))
    ));
}
