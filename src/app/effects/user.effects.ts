import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Actions, Effect } from '@ngrx/effects';
import {
  LOAD_USERS,
  LoadUsersAction,
  LoadUsersSuccess,
  UPDATE_USER,
  UpdateUserAction,
  UpdateUserSuccess,
  DELETE_USER,
  DeleteUserAction,
  DeleteUserSuccess
} from '../actions/user.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  users$: Observable<Action> = this.actions$
    .ofType<LoadUsersAction>(LOAD_USERS)
    //.debug('action received')
    .switchMap(action => this.userService.loadUsers())
    //.debug('data received via the HTTP request')
    .map(users => {
      return new LoadUsersSuccess(users);
    });

  @Effect()
  updateUser$: Observable<Action> = this.actions$
    .ofType<UpdateUserAction>(UPDATE_USER)
    //.debug('action received')
    .switchMap(action => this.userService.udpateUser(action.payload))
    //.debug('data received via the HTTP request')
    .map(user => {
      return new UpdateUserSuccess(user);
    });

  @Effect()
  deleteUser$: Observable<Action> = this.actions$
    .ofType<DeleteUserAction>(DELETE_USER)
    //.debug('action received')
    .switchMap(action => this.userService.deleteUser(action.payload))
    //.debug('data received via the HTTP request')
    .map(user => {
      return new DeleteUserSuccess(user);
    });
}
