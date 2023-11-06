import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingAdvertisingRoutingModule } from './marketing-advertising-routing.module';

//Modules
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MarketingAdvertisingRoutingModule,
    SharedModule
  ]
})
export class MarketingAdvertisingModule { }
