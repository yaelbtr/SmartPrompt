import { Injectable, signal } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { PromptItem } from './prompt.model';
import { createId, nowIso } from './prompt.utils';

const KEY = 'smartPrompt.prompts.v1';

@Injectable({ providedIn: 'root' })
export class PromptRepository {
  private readonly _items = signal<PromptItem[]>([]);

  constructor(private storage: StorageService) {
    this._items.set(this.storage.get<PromptItem[]>(KEY) ?? []);
  }

  items = this._items.asReadonly();

  private persist(next: PromptItem[]) {
    this._items.set(next);
    this.storage.set(KEY, next);
  }

  getById(id: string) {
    return this._items().find(p => p.id === id);
  }

  create(input: Pick<PromptItem, 'title' | 'content' | 'tags'>) {
    const now = nowIso();
    const item: PromptItem = {
      id: createId(),
      title: input.title.trim(),
      content: input.content.trim(),
      tags: input.tags,
      createdAt: now,
      updatedAt: now,
    };
    this.persist([item, ...this._items()]);
  }

  update(id: string, patch: Partial<Pick<PromptItem, 'title' | 'content' | 'tags'>>) {
    const next = this._items().map(p =>
      p.id === id
        ? {
            ...p,
            ...patch,
            title: patch.title?.trim() ?? p.title,
            content: patch.content?.trim() ?? p.content,
            updatedAt: nowIso(),
          }
        : p
    );
    this.persist(next);
  }

  remove(id: string) {
    this.persist(this._items().filter(p => p.id !== id));
  }
}
