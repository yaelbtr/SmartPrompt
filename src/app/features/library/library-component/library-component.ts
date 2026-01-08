import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PromptRepository } from '../prompt.repository';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Library</h1>

    <div style="display:flex; gap:8px; align-items:center; margin-bottom:12px;">
      <input
        type="text"
        placeholder="Search..."
        [value]="q()"
        (input)="q.set(($any($event.target).value ?? '').toString())"
      />
      <a routerLink="/library/new">New</a>
    </div>

    <div *ngIf="items().length === 0">No prompts yet.</div>

    <ul>
      <li *ngFor="let p of items()">
        <a [routerLink]="['/library', p.id]">{{ p.title }}</a>
        <small style="margin-left:8px;">{{ p.tags.join(', ') }}</small>
        <button style="margin-left:8px;" (click)="remove(p.id)">Delete</button>
      </li>
    </ul>
  `,
})
export class LibraryComponent {
  private readonly repo = inject(PromptRepository);
  q = signal('');

  items = computed(() => {
    const query = this.q().trim().toLowerCase();
    const all = this.repo.list() as any[];
    if (!query) return all;
    return all.filter(p =>
      (p.title + ' ' + p.content + ' ' + p.tags.join(' ')).toLowerCase().includes(query)
    );
  });

  remove(id: string) {
    this.repo.remove(id);
    // forces recompute since repo is not reactive; simplest approach for now:
    this.q.set(this.q());
  }
}
