import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ExampleGuard implements CanActivate {
  private router = inject(Router);

  canActivate(): boolean {
    // Example: Always allow
    return true;
  }
}
