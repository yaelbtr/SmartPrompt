import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PromptRepository } from '../prompt.repository';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <h1>{{ isEdit() ? 'Edit' : 'New' }} Prompt</h1>

    <form [formGroup]="form" (ngSubmit)="save()" style="display:grid; gap:10px; max-width:720px;">
      <label>
        Title
        <input formControlName="title" />
      </label>

      <label>
        Tags (comma separated)
        <input formControlName="tags" />
      </label>

      <label>
        Content
        <textarea rows="10" formControlName="content"></textarea>
      </label>

      <div style="display:flex; gap:10px;">
        <button type="submit" [disabled]="form.invalid">Save</button>
        <a routerLink="/library">Back</a>
      </div>
    </form>
  `,
})
export class PromptEditorComponent {
  private readonly repo = inject(PromptRepository);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  id = computed(() => this.route.snapshot.paramMap.get('id'));
  isEdit = computed(() => !!this.id());

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(80)]],
    tags: [''],
    content: ['', [Validators.required, Validators.maxLength(5000)]],
  });

  constructor() {
    const id = this.id();
    if (id) {
      const item = this.repo.getById(id);
      if (item) {
        this.form.patchValue({
          title: item.title,
          tags: item.tags.join(', '),
          content: item.content,
        });
      }
    }
  }

  save() {
    const v = this.form.getRawValue();
    const tags = (v.tags ?? '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const id = this.id();
    if (!id) {
      this.repo.create({ title: v.title ?? '', content: v.content ?? '', tags });
    } else {
      this.repo.update(id, { title: v.title ?? '', content: v.content ?? '', tags });
    }
    this.router.navigateByUrl('/library');
  }
}
