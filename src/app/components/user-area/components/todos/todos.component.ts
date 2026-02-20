import { Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ITodo } from '../../../../interfaces/todo.interface';
import { todoService } from '../../../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AsyncPipe, NgClass],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos$!: Observable<ITodo[]>
  private readonly _todoService = inject(todoService);
  private readonly _activatedRoute = inject(ActivatedRoute)

  set userId(value: number) {
    this.todos$ = this._todoService.getTodosById(value);
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(value => {
      this.userId = value['userId']
    })
  }
}
