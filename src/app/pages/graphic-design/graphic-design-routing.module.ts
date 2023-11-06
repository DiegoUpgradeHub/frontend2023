import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphicDesignComponent } from './graphic-design.component';

const routes: Routes = [
  {
    path: '', component: GraphicDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicDesignRoutingModule { }
