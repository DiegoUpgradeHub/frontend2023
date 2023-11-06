import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateIdentityRoutingModule } from './corporate-identity-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CorporateIdentityRoutingModule,
    SharedModule
  ]
})
export class CorporateIdentityModule { }
