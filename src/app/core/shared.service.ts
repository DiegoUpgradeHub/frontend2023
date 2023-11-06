import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //LANGUAGES
  //Variables for languages
  currentLanguage: string = '';
  currentLanguageSubscription: Subject<string> = new Subject<string>();
  //Functions for languages
  setCurrentLanguage() {
    this.currentLanguageSubscription.next(this.currentLanguage);
  }

  //THEMES
  //Variables for themes
  dayNight: boolean = false;
  dayNightSubscription: Subject<boolean> = new Subject<boolean>();
  //Functions for themes
  setRandomTheme(): void {
    const randomNumber = (min: number, max:number) => Math.floor(Math.random() * max - min + 1) + min
    const theme = randomNumber(1, 6)
    if (theme === 1) {
      this.setThemeOlive();
    } else if( theme === 2 ){
      this.setThemeLake();
    } else if( theme === 3 ){
      this.setThemeLake();
    } else if( theme === 4 ){
      this.setThemeSunrise();
    } else if( theme === 5 ){
      this.setThemeOlive();
    } else if( theme === 6 ){
      this.setThemeSand();
    }
  }
  setThemeDark(): void {
    this.removeAllThemes();
    document.body.classList.add('colorDark');
    this.dayNight = false;
    this.dayNightSubscription.next(this.dayNight);
    console.log(this.dayNight);
  }
  setThemeLight(): void {
    this.removeAllThemes();
    document.body.classList.add('colorGrey');
    this.dayNight = true;
    this.dayNightSubscription.next(this.dayNight);
    console.log(this.dayNight);
  }
  setThemeLake(): void {
    this.removeAllThemes();
    document.body.classList.add('colorBlue');
  }
  setThemeSunrise(): void {
    this.removeAllThemes();
    document.body.classList.add('colorPink');
  }
  setThemeOlive(): void {
    this.removeAllThemes();
    document.body.classList.add('colorGreen');
  }
  setThemeSand(): void {
    this.removeAllThemes();
    document.body.classList.add('colorYellow');
  }
  removeAllThemes(): void {
    document.body.classList.remove('colorDark');
    document.body.classList.remove('colorGrey');
    document.body.classList.remove('colorBlue');
    document.body.classList.remove('colorPink');
    document.body.classList.remove('colorGreen');
    document.body.classList.remove('colorYellow');
  }

  //CONTACT
  //Variables for toggle contact button & form
  contactButton: boolean = true;
  contactButtonSubscription: Subject<boolean> = new Subject<boolean>();
  contactForm: boolean = false;
  contactFormSubscription: Subject<boolean> = new Subject<boolean>();
  //Functions for toggle contact button
  showHideForm(): void {
    this.contactButton = !this.contactButton;
    this.contactButtonSubscription.next(this.contactButton);
    this.contactForm = !this.contactForm;
    this.contactFormSubscription.next(this.contactForm);
    this.setProductList();
    this.setProductsSelected();
    console.log(this.productsSelected);
  }

  //Variables for products interested in
  productsList: string[] = [];
  productsListSubscription: Subject<string[]> = new Subject<string[]>();
  productsSelected: string[] = [];
  productsSelectedSubscription: Subject<string[]> = new Subject<string[]>();
  productsListEnglish: string[] = ['Amazon solutions', 'Advertising material', 'Corporate identity', 'PPC campaigns', 'Email marketing', 'Marketing strategies', 'Restaurant web-app', 'CRM web-app', 'Maintenance & support'];
  productsListSpanish: string[] = ['Amazon solutions', 'Material de publicidad', 'Identidad corporativa', 'Campañas PPC', 'Email marketing', 'Estrategias de marketing', 'Restaurante web-app', 'CRM web-app', 'Mantenimiento y soporte'];
  productsListGerman: string[] = ['Amazon-Lösungen', 'Werbematerial', 'Corporate Identity', 'PPC-Kampagnen', 'E-Mail-Marketing', 'Marketingstrategien', 'Restaurant web-app', 'CRM web-app', 'Wartung & Support'];
  //Functions for products interested in
  setProductList () {
    if (this.currentLanguage === 'es') {
      this.productsList = this.productsListSpanish;
      this.productsListSubscription.next(this.productsList);
    } else if (this.currentLanguage === 'de') {
      this.productsList = this.productsListGerman;
      this.productsListSubscription.next(this.productsList);
    } else {
      this.productsList = this.productsListEnglish;
      this.productsListSubscription.next(this.productsList);
    }
  }
  setProductsSelected() {
    this.productsSelectedSubscription.next(this.productsSelected);
  }
  add(product: string) {
    this.productsSelected.push(product);
    let cleanList = this.productsSelected;
    this.removeDuplicated(cleanList);
  }
  removeDuplicated(productsSelected: any) {
    return this.productsSelected.filter((product: any,
      index: any) => productsSelected.indexOf(product) === index);
  }
  clear() {
    this.productsList = [];
  }

}
