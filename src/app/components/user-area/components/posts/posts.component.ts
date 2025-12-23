import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { IPost } from '../../../../interfaces/post.interface';
import { postsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts$!: Observable<IPost[]>
  private readonly _postsService = inject(postsService);
  private readonly _activatedRoute = inject(ActivatedRoute)

  set userId(value: number) {
    this.posts$ = this._postsService.getPostsById(value);
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(value => {
      this.userId = value['userId']
    })
  }
}
