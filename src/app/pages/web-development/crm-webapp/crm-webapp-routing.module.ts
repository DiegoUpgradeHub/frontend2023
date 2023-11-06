import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmWebappComponent } from './crm-webapp.component';

const routes: Routes = [
  {
    path: '', component: CrmWebappComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmWebappRoutingModule { }

