import { Routes } from '@angular/router';

export const libraryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./library-component/library-component').then(m => m.LibraryComponent),
  },
  {
    path: 'new',
    loadComponent: () => import('./prompt-editor-component/prompt-editor-component').then(m => m.PromptEditorComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./prompt-editor-component/prompt-editor-component').then(m => m.PromptEditorComponent),
  },
];
