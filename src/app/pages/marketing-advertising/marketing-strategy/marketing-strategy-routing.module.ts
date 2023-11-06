import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingStrategyComponent } from './marketing-strategy.component';

const routes: Routes = [
  {
    path: '', component: MarketingStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingStrategyRoutingModule { }
