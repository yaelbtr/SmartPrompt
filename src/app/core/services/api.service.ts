import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiResult } from './api.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  get<T>(url: string, options?: object): Observable<ApiResult<T>> {
    return this.http.get<T>(url, options).pipe(
      map((data) => ({ ok: true as const, data })),
      catchError((err: HttpErrorResponse) =>
        of({
          ok: false as const,
          error: {
            status: err.status ?? 0,
            message: err.error?.message ?? err.message ?? 'Request failed',
            details: err.error,
          },
        })
      )
    );
  }

  post<T>(url: string, body: unknown, options?: object): Observable<ApiResult<T>> {
    return this.http.post<T>(url, body, options).pipe(
      map((data) => ({ ok: true as const, data })),
      catchError((err: HttpErrorResponse) =>
        of({
          ok: false as const,
          error: {
            status: err.status ?? 0,
            message: err.error?.message ?? err.message ?? 'Request failed',
            details: err.error,
          },
        })
      )
    );
  }
}
