import { Action } from '@ngrx/store';

import { User } from '../../models/';
import * as user from '../actions/user.actions';

export interface State {
  users: User[];
  saving: boolean;
  selectedUser: User;
}

export const initialState: State = {
  users: [],
  saving: false,
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
    case user.UPDATE_USER: {
      return {
        ...state,
        saving: true
      };
    }
    case user.UPDATE_USER_SUCCESS: {
      // const index = state.users.findIndex(user => user.id === action.payload.id);
      return {
        ...state,
        users: state.users.map(
          u => (u.id === action.payload.id ? action.payload : u)
        ),
        saving: false,
        selectedUser: action.payload
      };
    }
    case user.DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter(u => u.id !== 1)
      }; // does not work with jsonplaceholder, server request needs to return a user or user id
    }
    default: {
      return state;
    }
  }
}
