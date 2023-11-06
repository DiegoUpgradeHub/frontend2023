import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAreaRoutingModule } from './my-area-routing.module';

//Modules
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyAreaRoutingModule,
    SharedModule
  ]
})
export class MyAreaModule { }
