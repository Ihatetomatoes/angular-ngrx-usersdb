import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';

@Injectable()
export class UserService {
  private API_PATH = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  loadUsers(): Observable<User[]> {
    return this.http.get(`${this.API_PATH}/users`).map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
