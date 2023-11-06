import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantWebappRoutingModule } from './restaurant-webapp-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestaurantWebappRoutingModule,
    SharedModule
  ]
})
export class RestaurantWebappModule { }
