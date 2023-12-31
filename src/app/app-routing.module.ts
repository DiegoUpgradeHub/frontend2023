import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `graphic-design`, loadChildren: () =>
      import('./pages/graphic-design/graphic-design.module').then(m => m.GraphicDesignModule)
  },
  {
    path: `marketing-advertising`, loadChildren: () =>
      import('./pages/marketing-advertising/marketing-advertising.module').then(m => m.MarketingAdvertisingModule)
  },
  {
    path: `web-development`, loadChildren: () =>
      import('./pages/web-development/web-development.module').then(m => m.WebDevelopmentModule)
  },
  {
    path: `contact`, loadChildren: () =>
      import('./core/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: `user-area/:id`, loadChildren: () =>
      import('./pages/my-area/my-area.module').then(m => m.MyAreaModule),
      canActivate: [AuthGuard]
  },
  {
    path: `sign-in`, loadChildren: () =>
      import('./pages/my-area/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: `messages`, loadChildren: () =>
      import('./pages/my-area/messages/messages.module').then(m => m.MessagesModule),
      canActivate: [AuthGuard]
  },
  {
    path: `amazon-solutions`, loadChildren: () =>
      import('./pages/graphic-design/amazon-solutions/amazon-solutions.module').then(m => m.AmazonSolutionsModule)
  },
  {
    path: `advertising-material`, loadChildren: () =>
      import('./pages/graphic-design/advertising-material/advertising-material.module').then(m => m.AdvertisingMaterialModule)
  },
  {
    path: `corporate-identity`, loadChildren: () =>
      import('./pages/graphic-design/corporate-identity/corporate-identity.module').then(m => m.CorporateIdentityModule)
  },
  {
    path: `ppc-campaign`, loadChildren: () =>
      import('./pages/marketing-advertising/ppc-campaign/ppc-campaign.module').then(m => m.PpcCampaignModule)
  },
  {
    path: `email-marketing`, loadChildren: () =>
      import('./pages/marketing-advertising/email-marketing/email-marketing.module').then(m => m.EmailMarketingModule)
  },
  {
    path: `marketing-strategy`, loadChildren: () =>
      import('./pages/marketing-advertising/marketing-strategy/marketing-strategy.module').then(m => m.MarketingStrategyModule)
  },
  {
    path: `restaurant-webapp`, loadChildren: () =>
      import('./pages/web-development/restaurant-webapp/restaurant-webapp.module').then(m => m.RestaurantWebappModule)
  },
  {
    path: `crm-webapp`, loadChildren: () =>
      import('./pages/web-development/crm-webapp/crm-webapp.module').then(m => m.CrmWebappModule)
  },
  {
    path: `maintenance-support`, loadChildren: () =>
      import('./pages/web-development/maintenance-support/maintenance-support.module').then(m => m.MaintenanceSupportModule)
  },
  {
    path: `services`, loadChildren: () =>
    import ('./pages/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: `glossary`, loadChildren: () =>
    import ('./pages/glossary/glossary.module').then(m => m.GlossaryModule)
  },
  {
    path: `about`, loadChildren: () =>
    import ('./pages/about/about.module').then(m => m.AboutModule)
  },

  { path: `home`, redirectTo: ``, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
