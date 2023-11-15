import { Component, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatRipple)ripple!: MatRipple;
  color: string = "white";
  radius: number = 40;

  constructor(
    private translate: TranslateService
  ) {}

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

  setAppLanguageEnglish() {
    this.translate.setDefaultLang('en');
  }

  setAppLanguageSpanish(){
    this.translate.setDefaultLang('es');
  }

  setAppLanguageGerman(){
    this.translate.setDefaultLang('de');
  }

}
