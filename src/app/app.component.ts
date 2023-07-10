import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentMode: string = 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentMode = this.themeService.getCurrentMode();
    window.addEventListener('modeChange', this.handleModeChange.bind(this) as EventListener);
  }
  
  ngOnDestroy(): void {
    window.removeEventListener('modeChange', this.handleModeChange.bind(this) as EventListener);
  }
  
  handleModeChange(event: CustomEvent<any>): void {
    console.log('cambiamos modo a: ' + this.themeService.getCurrentMode());
    this.currentMode = this.themeService.getCurrentMode();
  }
}
