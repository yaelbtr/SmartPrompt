import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { API_CONFIG } from '../core/config/api.config';
import { apiInterceptor } from '../core/interceptors/example.interceptor';
import { environment } from '../environments/environment';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    { provide: API_CONFIG, useValue: { apiBaseUrl: environment.apiBaseUrl } }
  ]
};
