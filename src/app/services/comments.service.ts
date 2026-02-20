import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IComment } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly _http = inject(HttpClient);

  getCommentsById(id: number): Observable<IComment[]> {
    return this._http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
