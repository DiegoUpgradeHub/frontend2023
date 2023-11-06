import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicDesignRoutingModule } from './graphic-design-routing.module';

//Modules
import { SharedModule } from 'src/app/core/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphicDesignRoutingModule,
    SharedModule
  ]
})
export class GraphicDesignModule { }
