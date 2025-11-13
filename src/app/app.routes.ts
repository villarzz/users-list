import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full'
  },
  {
    path: 'users-list',
    loadComponent: () => import('./components/users-list/users-list.component').then(m => m.UsersListComponent)
  },
  {
    path:'user-area/:userId',
    loadChildren: () => import('./components/user-area/user-area.routes').then(m => m.userAreaRoutes)
  }
];
