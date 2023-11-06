import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { SharedService } from 'src/app/core/shared.service';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  //TOGGLE CONTACT BUTTON variables
  contactButton: boolean = true;
  contactButtonSubscribed: Subscription;
  contactForm:boolean = false;
  contactFormSubscribed: Subscription;
  darkBackground = document.querySelector('#darkBackground');

  //FORM variables
  //Email validator
  email = new FormControl('', [Validators.required, Validators.email]);
  //Product selection
  products = new FormControl('');
  productsList: string[] = [];
  productsListSubscribed: Subscription;

  //Products interested in
  productsSelected: string[] = [];
  productsSelectedSubscribed: Subscription;

  constructor(
    public headerComponent: HeaderComponent,
    public translateService: TranslateService,
    private sharedService: SharedService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    //Toggle button and form contact
    this.contactButtonSubscribed = sharedService.contactButtonSubscription.subscribe(value => {
      this.contactButton = value;
      this.changeDetectorRef.detectChanges();
    });
    this.contactFormSubscribed = sharedService.contactFormSubscription.subscribe(value => {
      this.contactForm = value;
      this.changeDetectorRef.detectChanges();
    });
    //Products List
    this.productsListSubscribed = sharedService.productsListSubscription.subscribe(value => {
      this.productsList = value;
      this.changeDetectorRef.detectChanges();
    });
    //Products selected
    this.productsSelectedSubscribed = sharedService.productsSelectedSubscription.subscribe(value => {
      this.productsSelected = value;
      this.changeDetectorRef.detectChanges();
    });
    console.log(this.productsSelected);
  }
  ngOnInit(): void { }

  //TOGGLE CONTACT BUTTON function
  showHideForm(): void {
    this.sharedService.showHideForm();
  }

  //FormControl - email validator
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
