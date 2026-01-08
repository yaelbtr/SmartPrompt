import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_CONFIG } from '../config/api-config';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  const { apiBaseUrl } = inject(API_CONFIG);

  if (/^https?:\/\//i.test(req.url)) return next(req);

  const base = apiBaseUrl.replace(/\/+$/, '');
  const path = req.url.replace(/^\/+/, '');
  return next(req.clone({ url: `${base}/${path}` }));
};
