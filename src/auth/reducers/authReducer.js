import * as ActionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.AUTH_USER:
        return {...state, authenticated: true, user: action.user };
      case ActionTypes.UNAUTH_USER: 
        return { ...state, authenticated: false };
      case ActionTypes.AUTH_ERROR:
        return { ...state, error: action.error };
    }
  
    return state;
  }