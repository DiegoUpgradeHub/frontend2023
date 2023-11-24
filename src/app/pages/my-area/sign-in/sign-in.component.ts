import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from 'src/app/core/shared.service';

import { AuthService } from 'src/app/services/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signinForm: FormGroup;

  //FORM variables
  //Email validator
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private sharedService: SharedService,
    private changeDetectorRef: ChangeDetectorRef,
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  };
  ngOnInit(): void {};

  //Importante tener el ': void' porque sino dará error!
  loginUser(): void {
    this.authService.signIn(this.signinForm.value);
  }
  //FormControl - email validator
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid user';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
