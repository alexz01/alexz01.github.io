import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'not-found',
    loadComponent: () => import('./error/error.component').then(i => i.ErrorComponent)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blogs/blogs.routes').then(i => i.blogRoutes)
  },
  { path: '**', redirectTo: '/not-found' },
];