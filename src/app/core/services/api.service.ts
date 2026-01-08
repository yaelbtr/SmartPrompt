import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  private http = inject(HttpClient);

  getData<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint);
  }

  postData<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(endpoint, data);
  }
}
