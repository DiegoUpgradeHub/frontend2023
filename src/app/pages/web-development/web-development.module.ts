import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDevelopmentRoutingModule } from './web-development-routing.module';

//Modules
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebDevelopmentRoutingModule,
    SharedModule
  ]
})
export class WebDevelopmentModule { }
