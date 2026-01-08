import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_CONFIG } from '../config/api.config';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiConfig = inject(API_CONFIG);
  
  // Only prefix relative URLs
  if (!req.url.startsWith('http://') && !req.url.startsWith('https://')) {
    const apiReq = req.clone({
      url: `${apiConfig.apiBaseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`
    });
    return next(apiReq);
  }
  
  return next(req);
};
