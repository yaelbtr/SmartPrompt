
import { Injectable } from '@angular/core';

export type StorageDriver = 'local';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private driver: StorageDriver = 'local';

  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  // placeholder for future (Capacitor Preferences)
  getDriver(): StorageDriver {
    return this.driver;
  }
}
