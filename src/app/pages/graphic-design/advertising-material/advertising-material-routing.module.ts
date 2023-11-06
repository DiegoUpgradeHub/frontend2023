import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingMaterialComponent } from './advertising-material.component';

const routes: Routes = [
  {
    path: '', component: AdvertisingMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingMaterialRoutingModule { }
