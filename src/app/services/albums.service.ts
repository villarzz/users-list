import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAlbum } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root'
})
export class albumsService {
  private readonly _http = inject(HttpClient);

  getAlbumsById(id: number): Observable<IAlbum[]> {
    return this._http.get<IAlbum[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  }
}
