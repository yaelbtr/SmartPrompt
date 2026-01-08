import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'sp-app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/home">Home</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`.navbar { background: #1976d2; color: #fff; padding: 1rem; } a { color: #fff; text-decoration: none; margin-right: 1rem; } main { padding: 2rem; }`]
})
export class AppLayoutComponent {}
