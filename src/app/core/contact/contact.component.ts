import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/services/messages.service';

import { SharedService } from 'src/app/core/shared.service';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  //FORM GROUP variables
  public contactMeForm!: FormGroup;
  public nameFormControl?: FormControl;
  public emailFormControl!: FormControl;
  public messageFormControl!: FormControl;
  public companyFormControl!: FormControl;
  currentDate = new Date().toISOString();
  emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  urlRegex =  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

  //TOGGLE CONTACT BUTTON variables
  contactButton: boolean = true;
  contactButtonSubscribed: Subscription;
  contactForm:boolean = false;
  contactFormSubscribed: Subscription;
  darkBackground = document.querySelector('#darkBackground');

  //SNACKBAR variables
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 10;

  constructor(
    public headerComponent: HeaderComponent,
    public translateService: TranslateService,
    private sharedService: SharedService,
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    public messagesService: MessagesService,
    public router: Router,
    private _snackBar: MatSnackBar,
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
  }
  ngOnInit(): void {
    //Initialize contact form
    this.initForm()
  }

  //TOGGLE CONTACT BUTTON function
  showHideForm(): void {
    this.sharedService.showHideForm();
  }

  //CONTACT ME FORM function
  public initForm() {
    //FormGroup
    this.contactMeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      message: ['', [Validators.required, Validators.maxLength(300)]],
      company: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      label: ['Contact Form - Website'],
      date: [this.currentDate]
    });
    //FormControls
    this.nameFormControl = this.contactMeForm.get('name') as FormControl;
    this.emailFormControl = this.contactMeForm.get('email') as FormControl;
    this.companyFormControl = this.contactMeForm.get('company') as FormControl;
    this.messageFormControl = this.contactMeForm.get('message') as FormControl;
  }

  contactMe() {
    if (this.contactMeForm.valid) {
      this.messagesService.createMessage(this.contactMeForm.value).subscribe((res) => {
          // alert('Message sent successfully');
          window.location.reload();
      })
    } else {
      // alert('Your contact form is invalid');
    }
  }

  //SNACKBAR function
  openSnackBar() {
    if (this.contactMeForm.valid) {
      this._snackBar.open('Message sent correct', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    } else {
      this._snackBar.open('Message not sent', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    }
  }

}

