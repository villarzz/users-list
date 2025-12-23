import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class postsService {
  private readonly _http = inject(HttpClient);

  getPostsById(id: number): Observable<IPost[]> {
    return this._http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
