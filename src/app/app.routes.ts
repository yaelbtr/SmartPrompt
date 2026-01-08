import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'library' },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('./features/library/library.routes').then((m) => m.libraryRoutes),
      },
    ],
  },
];
