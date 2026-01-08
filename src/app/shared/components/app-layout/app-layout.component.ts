import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'sp-app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <a routerLink="/" class="brand-link">SmartPrompt</a>
        </div>
        <div class="nav-links">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/library" routerLinkActive="active">Library</a>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      background: #1976d2;
      color: #fff;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-link {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 600;
    }
    .nav-links a {
      color: #fff;
      text-decoration: none;
      margin-left: 1.5rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .nav-links a:hover {
      background: rgba(255,255,255,0.1);
    }
    .nav-links a.active {
      background: rgba(255,255,255,0.2);
    }
    .main-content {
      padding: 2rem 1rem;
    }
    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        gap: 1rem;
      }
      .nav-links a {
        margin-left: 0.5rem;
      }
    }
  `]
})
export class AppLayoutComponent {}
