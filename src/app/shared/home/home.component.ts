  import { Component } from '@angular/core';
import { TranslateService } from 'src/app/core/services/translate.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  json_text : any;
  hidden_text : boolean = false;

  constructor(private languageService: TranslateService ) { }

  ngOnInit() {
    this.json_text = this.languageService.firstTextComponent('home')
    this.languageService.texComponent$.pipe(distinctUntilChanged()).subscribe((value) => {
      this.json_text= this.languageService.firstTextComponent('home');
      console.log(this.json_text);
    });
  }
}
