import { Action } from '@ngrx/store';
import { User } from '../models/';

export const LOAD_USERS = '[Users] Load';
export const LOAD_USERS_SUCCESS = '[Users] Load Success';
export const SELECT_USER = '[User] Select';
export const UPDATE_USER = '[User] Update';
export const UPDATE_USER_SUCCESS = '[User] Update Success';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;
  constructor(public payload: User[]) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class SelectUserAction implements Action {
  readonly type = SELECT_USER;
  constructor(public payload: User) {}
}

export class UpdateUserAction implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  | LoadUsersAction
  | LoadUsersSuccess
  | SelectUserAction
  | UpdateUserAction
  | UpdateUserSuccess;
