import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateIdentityComponent } from './corporate-identity.component';

const routes: Routes = [
  {
    path: '', component: CorporateIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateIdentityRoutingModule { }
