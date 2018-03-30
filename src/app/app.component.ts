import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LOAD_USERS } from './actions/user.actions';
import { State } from './reducers/user.reducer';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'Users DB';
	events = [];
	constructor(private store: Store<any>) {
		this.store.dispatch({ type: LOAD_USERS });
	}
}
