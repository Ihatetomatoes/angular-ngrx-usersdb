import './core/rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';

import { AppComponent } from './app.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import { UserService } from './user/user.service';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { routes } from './routes';
import { userReducer } from './store/reducers/user.reducer';

import {
  MatButtonModule,
  MatTableModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ user: userReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
      // ,logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
