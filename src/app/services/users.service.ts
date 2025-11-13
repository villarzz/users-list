import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly _http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
