import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketingAdvertisingComponent } from './marketing-advertising.component';

const routes: Routes = [
  {
    path: '', component: MarketingAdvertisingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingAdvertisingRoutingModule { }
