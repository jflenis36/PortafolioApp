import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  theme = ['dark', 'light', 'extra']
  conta = 1;
  click_menu = false;

  constructor(private themeService: ThemeService) {}

  changeMode(): void {
    this.themeService.changeMode(this.theme[this.conta]);
    if(this.conta == 1) {
      this.conta = 0;
    } else {
      this.conta++;
    }
  }
}
