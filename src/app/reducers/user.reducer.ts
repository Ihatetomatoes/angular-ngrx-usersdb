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
    case user.LOAD_USERS_SUCCESS: {
      return { ...state, users: action.payload };
    }
    case user.SELECT_USER: {
      return { ...state, selectedUser: Object.assign({}, action.payload) };
    }
    case user.UPDATE_USER_SUCCESS: {
      //const index = state.users.findIndex(user => user.id === action.payload.id);
      return {
        ...state,
        users: state.users.map(
          user => (user.id === action.payload.id ? action.payload : user)
        ),
        selectedUser: action.payload
      };
    }
    case user.DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter(user => user.id !== 1)
      }; // does not work with jsonplaceholder, server request need to return a user or user id
    }
    default: {
      return state;
    }
  }
}
