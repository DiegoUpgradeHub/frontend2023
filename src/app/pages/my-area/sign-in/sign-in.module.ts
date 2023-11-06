import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule
  ]
})
export class SignInModule { }
