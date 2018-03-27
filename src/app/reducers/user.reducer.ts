import { Action } from '@ngrx/store';

import { User } from '../models/';
import * as user from '../actions/user.actions';

export interface State {
  users: User[];
  selectedUser: User;
}

export const initialState: State = {
  users: [],
  selectedUser: null
};

export function userReducer(state = initialState, action: user.Actions): State {
  switch (action.type) {
    case user.LOAD_USERS:
    case user.LOAD_USERS_SUCCESS: {
      return { ...state, users: action.payload };
    }
    case user.SELECT_USER: {
      return { ...state, selectedUser: action.payload };
    }
    case user.UPDATE_USER:
    case user.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
