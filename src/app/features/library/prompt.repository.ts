import { Injectable, inject } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';
import { PromptItem } from './prompt.model';
import { createId, nowIso } from './prompt.utils';

const KEY = 'smartPrompt.prompts.v1';

@Injectable({ providedIn: 'root' })
export class PromptRepository {
  private readonly storage = inject(StorageService);

  list(): PromptItem[] {
    return this.storage.get<PromptItem[]>(KEY) ?? [];
  }

  getById(id: string): PromptItem | undefined {
    return this.list().find(p => p.id === id);
  }

  create(input: Pick<PromptItem, 'title' | 'content' | 'tags'>): PromptItem {
    const now = nowIso();
    const item: PromptItem = {
      id: createId(),
      title: input.title.trim(),
      content: input.content.trim(),
      tags: input.tags,
      createdAt: now,
      updatedAt: now,
    };
    const next = [item, ...this.list()];
    this.storage.set(KEY, next);
    return item;
  }

  update(id: string, patch: Partial<Pick<PromptItem, 'title' | 'content' | 'tags'>>): PromptItem {
    const items = this.list();
    const idx = items.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Prompt not found');

    const current = items[idx];
    const updated: PromptItem = {
      ...current,
      title: patch.title !== undefined ? patch.title.trim() : current.title,
      content: patch.content !== undefined ? patch.content.trim() : current.content,
      tags: patch.tags !== undefined ? patch.tags : current.tags,
      updatedAt: nowIso(),
    };
    const next = [...items];
    next[idx] = updated;
    this.storage.set(KEY, next);
    return updated;
  }

  remove(id: string): void {
    const next = this.list().filter(p => p.id !== id);
    this.storage.set(KEY, next);
  }
}
