import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PpcCampaignComponent } from './ppc-campaign.component';

const routes: Routes = [
  {
    path: '', component: PpcCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PpcCampaignRoutingModule { }
