import { SIGNIN } from '../actions/actionTypes';
import { authenticated } from '../actions/authActions';
import * as auth from '../authHelper';

export default (action$) => {
    return action$.ofType(SIGNIN)
        .map(action => action.payload)
        .switchMap(({ username, password }) => auth.signin(username, password) )
        .map(response => authenticated(response));
}