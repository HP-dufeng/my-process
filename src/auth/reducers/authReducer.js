import * as ActionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.AUTH_USER:
        return {...state, authenticated: true };
      case ActionTypes.UNAUTH_USER: 
        return { ...state, authenticated: false };
    }
  
    return state;
  }