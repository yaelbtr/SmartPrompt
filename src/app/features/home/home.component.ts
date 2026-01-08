import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';

type Todo = { userId: number; id: number; title: string; completed: boolean };

@Component({
  standalone: true,
  selector: 'sp-home',
  imports: [CommonModule],
  template: `
    <h1>Home</h1>

    <button (click)="load()">Load Todo</button>

    <pre *ngIf="state">{{ state | json }}</pre>
  `,
})
export class HomeComponent {
  private readonly api = inject(ApiService);
  state: unknown;

  load() {
    this.api.get<Todo>('/todos/1').subscribe((res) => (this.state = res));
  }
}
