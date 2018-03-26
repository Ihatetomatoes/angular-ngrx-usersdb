import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Actions, Effect } from '@ngrx/effects';
import {
  LoadUsersAction,
  LoadUsersSuccess,
  LOAD_USERS,
  LOAD_USERS_SUCCESS
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
}
