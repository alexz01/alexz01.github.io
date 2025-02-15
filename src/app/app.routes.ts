import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'not-found',
    loadChildren: () => import('./error/error.component').then(m => m.ErrorComponent)
  },
  {
    path: 'blogs',
    loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent)
  },
  { path: '**', redirectTo: '/not-found' },
];