import { Action } from '@ngrx/store';
import { User } from '../models/';

export const LOAD_USER = '[User] Load';
export const LOAD_USER_SUCCESS = '[User] Load Success';
export const SELECT_USER = '[User] Select';
export const SELECT_USER_BY_ID = '[User] Select by ID';
export const UPDATE_USER = '[User] Update';
export const UPDATE_USER_SUCCESS = '[User] Update Success';
export const DELETE_USER = '[User] Delete';
export const DELETE_USER_SUCCESS = '[User] Delete Success';
export const LOAD_USERS = '[Users] Load';
export const LOAD_USERS_SUCCESS = '[Users] Load Success';

export class LoadUserAction implements Action {
  readonly type = LOAD_USER;
  constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: string) {}
}

export class SelectUserAction implements Action {
  readonly type = SELECT_USER;
  constructor(public payload: User) {}
}

export class SelectUserByIDAction implements Action {
  readonly type = SELECT_USER_BY_ID;
  constructor(public payload: string) {}
}

export class UpdateUserAction implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class DeleteUserAction implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: User) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;
  constructor(public payload: User[]) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
  | LoadUsersAction
  | LoadUsersSuccess
  | SelectUserAction
  | SelectUserByIDAction
  | DeleteUserAction
  | DeleteUserSuccess
  | UpdateUserAction
  | UpdateUserSuccess;
