import { Component } from '@angular/core';

@Component({
  selector: 'sp-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h1>Welcome to SmartPrompt</h1>
      <p>Your production-ready Angular application.</p>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
