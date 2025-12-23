import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { IAlbum } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class todoService {
  private readonly _http = inject(HttpClient);

  getTodosById(id: number): Observable<ITodo[]> {
    return this._http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  }

  getAlbumsById(id: number): Observable<IAlbum[]> {
    return this._http.get<IAlbum[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  }
}
