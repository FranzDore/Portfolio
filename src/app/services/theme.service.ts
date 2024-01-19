import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private availableThemes = [
    'dark',
    'light',
    'pink'
  ]

  constructor() { }

  public getThemes(): string[] {
    return this.availableThemes;
  }
}
