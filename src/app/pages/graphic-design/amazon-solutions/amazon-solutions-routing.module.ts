import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmazonSolutionsComponent } from './amazon-solutions.component';

const routes: Routes = [
  {
    path: '', component: AmazonSolutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmazonSolutionsRoutingModule { }
