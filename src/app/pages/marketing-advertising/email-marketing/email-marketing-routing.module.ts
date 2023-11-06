import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailMarketingComponent } from './email-marketing.component';

const routes: Routes = [
  {
    path: '', component: EmailMarketingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailMarketingRoutingModule { }
