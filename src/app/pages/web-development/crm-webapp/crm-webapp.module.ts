import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmWebappRoutingModule } from './crm-webapp-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrmWebappRoutingModule,
    SharedModule
  ]
})
export class CrmWebappModule { }
