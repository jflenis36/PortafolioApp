import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { TranslateService } from '../services/translate.service';
import { distinctUntilChanged  } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  theme = ['dark', 'light', 'extra']
  language = ['english', 'spanish']
  conta_1 = 1;
  conta_2 = 1;
  click_menu = false;
  json_text : any;

  constructor(
    private themeService: ThemeService,
    private languageService: TranslateService 
    ) {}

  ngOnInit() {
    this.themeService.changeMode(this.theme[0])

    this.json_text = this.languageService.firstTextComponent('navbar')
    this.languageService.texComponent$.pipe(distinctUntilChanged()).subscribe((value) => {
      this.json_text= this.languageService.firstTextComponent('navbar');
    });
  }

  changeLanguage() {
    this.languageService.changeMode(this.language[this.conta_1]);
    if(this.conta_1 == 1) {
      this.conta_1 = 0;
    } else {
      this.conta_1++;
    }
  }

  changeMode(): void {
    this.themeService.changeMode(this.theme[this.conta_2]);
    if(this.conta_2 == 1) {
      this.conta_2 = 0;
    } else {
      this.conta_2++;
    }
  }
}
