import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../models/';
import { SELECT_USER } from '../../../actions/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user$: User;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select(state => state.user.selectedUser).subscribe(user => {
      this.user$ = user;
    });
  }
  ngOnDestroy() {
    this.store.dispatch({ type: SELECT_USER, payload: null });
  }
}
