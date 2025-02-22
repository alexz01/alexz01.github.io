import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  darkModeEnabled$!: Observable<boolean>;
  private _darkModeEnabled$ = new BehaviorSubject<boolean>(false);
  private _darkModeEnabled = false;

  constructor() {
    const prefersColorSchemeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (!prefersColorSchemeDark) return;

    this._darkModeEnabled = prefersColorSchemeDark.matches;

    this._darkModeEnabled$.next(this._darkModeEnabled);
    this.darkModeEnabled$ = this._darkModeEnabled$.asObservable();

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this._darkModeEnabled = e.matches;
        this._darkModeEnabled$.next(this._darkModeEnabled);
      });
  }

  toggleDarkMode() {
    this._darkModeEnabled = !this._darkModeEnabled;
    this._darkModeEnabled$.next(this._darkModeEnabled);
  }

  get darkModeEnabled() { return this._darkModeEnabled; }

  ngOnDestroy() {
    this._darkModeEnabled$.complete();
  }
}