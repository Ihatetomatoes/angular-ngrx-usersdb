import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';

@Injectable()
export class UserService {
  private API_PATH = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  loadUser(id: string): Observable<User> {
    return this.http.get(`${this.API_PATH}/users/${id}`).map(res => res.json());
  }

  loadUsers(): Observable<User[]> {
    return this.http.get(`${this.API_PATH}/users`).map(res => res.json());
  }

  udpateUser(user: User) {
    return this.http
      .put(`${this.API_PATH}/users/${user.id}`, user)
      .map(res => res.json());
  }

  deleteUser(user: User) {
    return this.http
      .delete(`${this.API_PATH}/users/${user.id}`)
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
