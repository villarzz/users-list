import { Routes } from "@angular/router";

export const userAreaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user-area.component').then(m => m.UserAreaComponent),
    children: [
      {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
      },
      {
        path: 'todo',
        loadComponent: () => import('./components/todos/todos.component').then(m => m.TodosComponent)
      }
    ]
  }
];
