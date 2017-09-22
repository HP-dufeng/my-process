import * as ActionTypes from '../actions/actionTypes';

import initialState from './initialState';

export default function(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.ACCESS_DENIED:
        return {...state, authenticated: false };
    }
  
    return state;
  }