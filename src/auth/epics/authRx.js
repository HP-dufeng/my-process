import * as auth from '../authHelper';
import * as ActionTypes from '../actions/actionTypes';
import { authenticated, unauthenticated } from '../actions/authActions';

export default function(action$) {
  return action$.ofType(ActionTypes.CHECKED_IS_LOGIN)
    .switchMap(() => auth.isAuthenticated())
    .map(result => {
      if(result.authenticated)
         return authenticated(result);
      else
        return unauthenticated();
    });
}
