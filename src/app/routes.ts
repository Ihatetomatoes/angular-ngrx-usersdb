import { Routes } from '@angular/router';

import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent }
];
