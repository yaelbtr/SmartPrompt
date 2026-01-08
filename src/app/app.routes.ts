import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/home/home.routes').then(m => m.homeRoutes)
      }
    ]
  }
];
