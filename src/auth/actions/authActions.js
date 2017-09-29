import * as ActionTypes from './actionTypes';

export function checkIsLogin() {
    return { type: ActionTypes.CHECKED_IS_LOGIN };
}

export function signinUser({ username, password }) {
    return { type: ActionTypes.SIGNIN, payload: {username, password} };
}

export function authenticated(user) {
    return { type: ActionTypes.AUTH_USER, user };
}

export function unauthenticated() {
    return { type: ActionTypes.UNAUTH_USER };
}


export function authError(error) {
    return { type: ActionTypes.AUTH_ERROR, error };
}