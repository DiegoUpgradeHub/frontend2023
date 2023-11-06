import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAreaComponent } from './my-area.component';

const routes: Routes = [
  {
    path: '', component: MyAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAreaRoutingModule { }
