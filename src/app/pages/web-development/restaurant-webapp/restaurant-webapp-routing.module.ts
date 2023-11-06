import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantWebappComponent } from './restaurant-webapp.component';

const routes: Routes = [
  {
    path: '', component: RestaurantWebappComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantWebappRoutingModule { }
