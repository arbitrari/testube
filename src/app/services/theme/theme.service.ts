import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';
  private mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

  preference = signal<Theme>(this.loadFromStorage());
  resolved = signal<'light' | 'dark'>('dark');

  constructor() {
    effect(() => {
      const pref = this.preference();
      this.applyTheme(pref);
      this.saveToStorage(pref);
    });

    this.mediaQuery.addEventListener('change', () => {
      if (this.preference() === 'system') {
        this.updateResolved();
      }
    });
  }

  setTheme(theme: Theme) {
    this.preference.set(theme);
  }

  isDark(): boolean {
    return this.resolved() === 'dark';
  }

  private applyTheme(pref: Theme) {
    if (pref === 'system') {
      this.updateResolved();
    } else {
      this.resolved.set(pref);
    }

    const isLight = this.resolved() === 'light';
    document.documentElement.classList.toggle('light-theme', isLight);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', isLight ? '#ffffff' : '#000000');
    }
  }

  private updateResolved() {
    this.resolved.set(this.mediaQuery.matches ? 'light' : 'dark');
  }

  private loadFromStorage(): Theme {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
    return 'dark';
  }

  private saveToStorage(pref: Theme) {
    localStorage.setItem(this.STORAGE_KEY, pref);
  }
}
