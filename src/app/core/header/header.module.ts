import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SharedModule
  ]
})
export class HeaderModule { }
