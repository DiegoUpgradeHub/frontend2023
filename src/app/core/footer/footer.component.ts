import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/core/shared.service';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  //Variables for day or night mode
  dayNight!: boolean;
  dayNightSubscribed: Subscription;
  //Variables for language
  currentLanguage!: string;
  currentLanguageSubscribed!: Subscription;

  constructor (
    private sharedService: SharedService,
    public appComponent: AppComponent,
    public translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.dayNightSubscribed = sharedService.dayNightSubscription.subscribe(value => {
      this.dayNight = value;
      this.changeDetectorRef.detectChanges();
    });
    this.currentLanguageSubscribed = sharedService.currentLanguageSubscription.subscribe(value => {
      this.currentLanguage = value;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit(): void {
    this.detectBrowserLanguage();
  }

  //LANGUAGES FUNCTIONS
  detectBrowserLanguage(){
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang === 'es') {
      this.setSpanish();
    } else if (browserLang === 'de') {
      this.setGerman();
    } else {
      this.setEnglish();
    }
  }
  setEnglish(){
    this.appComponent.setAppLanguageEnglish();
    this.sharedService.currentLanguage = 'en';
    this.sharedService.productsList = this.sharedService.productsListEnglish;
    this.sharedService.setCurrentLanguage();
  }
  setSpanish(){
    this.sharedService.currentLanguage = 'es';
    this.appComponent.setAppLanguageSpanish();
    this.sharedService.productsList = this.sharedService.productsListSpanish;
    this.sharedService.setCurrentLanguage();
  }
  setGerman(){
    this.appComponent.setAppLanguageGerman();
    this.sharedService.currentLanguage = 'de';
    this.sharedService.productsList = this.sharedService.productsListGerman;
    this.sharedService.setCurrentLanguage();
  }

  //Functions for themes
  setRandomTheme(): void {
    this.sharedService.setRandomTheme();
  }
  setThemeDark(): void {
    this.sharedService.setThemeDark();
  }
  setThemeLight(): void {
    this.sharedService.setThemeLight();
  }

}
