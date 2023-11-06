import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevelopmentComponent } from './web-development.component';

const routes: Routes = [
  {
    path: '', component: WebDevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebDevelopmentRoutingModule { }
