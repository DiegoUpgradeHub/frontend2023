import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SharedService } from 'src/app/core/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  //FORM variables
  //Email validator
  email = new FormControl('', [Validators.required, Validators.email]);

  //TOGGLE CONTACT BUTTON variables
  contactButton: boolean = true;
  contactButtonSubscribed: Subscription;
  contactForm:boolean = false;
  contactFormSubscribed: Subscription;

  constructor(
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
  };
  ngOnInit(): void {};

  //FormControl - email validator
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid user';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //TOGGLE CONTACT BUTTON function
  showHideForm(): void {
    this.sharedService.showHideForm();
  }

}
