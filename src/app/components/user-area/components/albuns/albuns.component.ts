import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { todoService } from '../../../../services/todo.service';
import { IAlbum } from '../../../../interfaces/album.interface';

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.css'
})
export class AlbunsComponent {
  albums$!: Observable<IAlbum[]>
  private readonly _todoService = inject(todoService);
  private readonly _activatedRoute = inject(ActivatedRoute)

  set userId(value: number) {
    this.albums$ = this._todoService.getAlbumsById(value);
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(value => {
      this.userId = value['userId']
    })
  }
}
