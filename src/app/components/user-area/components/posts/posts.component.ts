import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { IPost } from '../../../../interfaces/post.interface';
import { postsService } from '../../../../services/posts.service';
import { lucideArrowBigUpDash, lucideHeart } from '@ng-icons/lucide';
import { IComment } from '../../../../interfaces/comments.interface';
import { CommentsService } from '../../../../services/comments.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgIcon],
  viewProviders: [provideIcons({ lucideArrowBigUpDash, lucideHeart })],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  selectedPostId!: number;
  posts$!: Observable<IPost[]>
  openCommentsSection = false;
  comments$!: Observable<IComment[]>

  private readonly _postsService = inject(postsService);
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _commentsService = inject(CommentsService);

  set userId(value: number) {
    this.posts$ = this._postsService.getPostsById(value);
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(value => {
      this.userId = value['userId']
    })
  }

  openComments(postId: number) {
    this.selectedPostId = postId;
    this.openCommentsSection = !this.openCommentsSection;
    if (this.openCommentsSection) {
      this.comments$ = this._commentsService.getCommentsById(postId);
    }
  }

  numeroAleatorio1a100(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
