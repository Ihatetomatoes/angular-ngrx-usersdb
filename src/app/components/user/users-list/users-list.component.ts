import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/';
import { SELECT_USER } from '../../../actions/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: User[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select(state => state.user.users).subscribe(users => {
      //console.log('got users', users);
      this.users$ = users;
    });
  }

  onSelect(user: User) {
    //console.log(user);
    this.store.dispatch({ type: SELECT_USER, payload: user });
  }
}