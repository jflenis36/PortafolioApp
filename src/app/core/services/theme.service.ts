import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentMode: string = 'dark'; // Modo actual, por defecto dark

  constructor() {}

  changeMode(mode: string): void {
    this.currentMode = mode;
    document.body.classList.remove('light', 'dark', 'extra');
    document.body.classList.add(mode);
    window.dispatchEvent(new CustomEvent('modeChange'));
  }

  getCurrentMode(): string {
    return this.currentMode;
  }

  private emitModeChange(): void {
    const event = new CustomEvent('modeChange', { detail: this.currentMode });
    window.dispatchEvent(event);
  }
}
