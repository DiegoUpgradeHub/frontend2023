import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';

import { SharedService } from 'src/app/core/shared.service';

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //Variables for drop down menu
  phoneMenu: boolean = false
  graphicServices: boolean = false;
  marketingServices: boolean = false;
  developmentServices: boolean = false;
  languages: boolean = false;
  themes: boolean = false;
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

  //MENU FUNCTIONS
  hideAll(): void {
    this.phoneMenu = false;
    this.graphicServices = false;
    this.marketingServices = false;
    this.developmentServices = false;
    this.languages = false;
    this.themes = false;
  }
  showPhoneMenu(): void {
    this.hideAll();
    this.phoneMenu = true;
  }
  showGraphicServices(): void {
    this.graphicServices = !this.graphicServices;
    this.marketingServices = false;
    this.developmentServices = false;
    this.languages = false;
    this.themes = false;
  }
  showMarketingServices(): void {
    this.marketingServices = !this.marketingServices;
    this.graphicServices = false;
    this.developmentServices = false;
    this.languages = false;
    this.themes = false;
  }
  showDeveloperServices(): void {
    this.developmentServices = !this.developmentServices;
    this.graphicServices = false;
    this.marketingServices = false;
    this.languages = false;
    this.themes = false;
  }
  showLanguages(): void {
    this.languages = !this.languages;
    this.graphicServices = false;
    this.marketingServices = false;
    this.developmentServices = false;
    this.themes = false;
  }
  showThemes(): void {
    this.themes = !this.themes;
    this.graphicServices = false;
    this.marketingServices = false;
    this.developmentServices = false;
    this.languages = false;
  }

  //THEMES FUNCTIONS
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
