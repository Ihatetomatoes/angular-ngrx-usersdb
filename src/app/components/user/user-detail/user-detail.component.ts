import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../../models/';
import {
  SELECT_USER,
  UPDATE_USER,
  SELECT_USER_BY_ID,
  SelectUserAction
} from '../../../store/actions/user.actions';
import { ISubscription } from 'rxjs/Subscription';
import { MatInput, MatFormField, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: User;
  saving: boolean;
  userId: string;
  subscription: ISubscription;
  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['id']; // <-- this is how you would access it
    });

    this.subscription = this.store
      .select(state => state.user.selectedUser)
      .subscribe(user => {
        this.user$ = user;
      });

    this.store.select(state => state.user.saving).subscribe(saving => {
      this.saving = saving;
    });
  }
  ngOnDestroy() {
    this.store.dispatch({ type: SELECT_USER, payload: null });
    this.subscription.unsubscribe();
  }
  handleSubmit() {
    this.snackBar.open('Saving user', null, { duration: 3000 });
    this.store.dispatch({ type: UPDATE_USER, payload: this.user$ });
  }
}
