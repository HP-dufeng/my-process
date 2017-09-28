import Rx from 'rxjs/Rx';
import * as auth from './authRequest';

export const isAuthenticated = () => {
    return auth.getAccount()
        .map(ajaxResponse => ajaxResponse.response)
        .map(response => ({ authenticated: true, user: response }))
        .catch(error => {
            return Rx.Observable.of({ authenticated: false, error });
        });
};

export function signin(username, password) {
    return auth.getAccessToken(username, password);
}

export function signout() {
    
}
