import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmazonSolutionsRoutingModule } from './amazon-solutions-routing.module';

import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AmazonSolutionsRoutingModule,
    SharedModule
  ]
})
export class AmazonSolutionsModule { }
