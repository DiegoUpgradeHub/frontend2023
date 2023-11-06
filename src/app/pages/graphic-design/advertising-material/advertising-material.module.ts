import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingMaterialRoutingModule } from './advertising-material-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdvertisingMaterialRoutingModule,
    SharedModule
  ]
})
export class AdvertisingMaterialModule { }
