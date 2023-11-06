import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceSupportRoutingModule } from './maintenance-support-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaintenanceSupportRoutingModule,
    SharedModule
  ]
})
export class MaintenanceSupportModule { }
