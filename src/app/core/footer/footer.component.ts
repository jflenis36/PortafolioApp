import { Component } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  json_text : any;

  constructor(private languageService: TranslateService ) { }


  ngOnInit() {
    this.json_text = this.languageService.firstTextComponent('footer')
    this.languageService.texComponent$.pipe(distinctUntilChanged()).subscribe((value) => {
      this.json_text= this.languageService.firstTextComponent('footer');
      console.log(this.json_text);
    });
  }
}
