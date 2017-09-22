import * as ActionTypes from './actionTypes';

export function checkIsLogin() {
    return { type: ActionTypes.CHECKED_IS_LOGIN };
}

export function accessDenied() {
    return { type: ActionTypes.ACCESS_DENIED };
}

export function signinUser({ username, password }) {
    return { type: ActionTypes.AUTH_USER, playload: {username, password} };
}

export function authError(error) {
    return { type: ActionTypes.AUTH_ERROR, payload: error };
}