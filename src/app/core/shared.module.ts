import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//i18n
import { TranslateModule } from '@ngx-translate/core';

//Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';

import { GraphicDesignComponent } from '../pages/graphic-design/graphic-design.component';
import { AmazonSolutionsComponent } from '../pages/graphic-design/amazon-solutions/amazon-solutions.component';
import { AdvertisingMaterialComponent } from '../pages/graphic-design/advertising-material/advertising-material.component';
import { CorporateIdentityComponent } from '../pages/graphic-design/corporate-identity/corporate-identity.component';

import { MarketingAdvertisingComponent } from '../pages/marketing-advertising/marketing-advertising.component';
import { PpcCampaignComponent } from '../pages/marketing-advertising/ppc-campaign/ppc-campaign.component';
import { EmailMarketingComponent } from '../pages/marketing-advertising/email-marketing/email-marketing.component';
import { MarketingStrategyComponent } from '../pages/marketing-advertising/marketing-strategy/marketing-strategy.component';

import { WebDevelopmentComponent } from '../pages/web-development/web-development.component';
import { RestaurantWebappComponent } from '../pages/web-development/restaurant-webapp/restaurant-webapp.component';
import { CrmWebappComponent } from '../pages/web-development/crm-webapp/crm-webapp.component';
import { MaintenanceSupportComponent } from '../pages/web-development/maintenance-support/maintenance-support.component';

import { MyAreaComponent } from '../pages/my-area/my-area.component';
import { SignInComponent } from '../pages/my-area/sign-in/sign-in.component';

import { ServicesComponent } from '../pages/services/services.component';
import { GlossaryComponent } from '../pages/glossary/glossary.component';
import { AboutComponent } from '../pages/about/about.component';

//Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,

    GraphicDesignComponent,
    AmazonSolutionsComponent,
    AdvertisingMaterialComponent,
    CorporateIdentityComponent,

    MarketingAdvertisingComponent,
    PpcCampaignComponent,
    EmailMarketingComponent,
    MarketingStrategyComponent,

    WebDevelopmentComponent,
    RestaurantWebappComponent,
    CrmWebappComponent,
    MaintenanceSupportComponent,

    MyAreaComponent,
    SignInComponent,

    ServicesComponent,
    GlossaryComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular material
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    //in18
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,

    GraphicDesignComponent,
    AmazonSolutionsComponent,
    AdvertisingMaterialComponent,
    CorporateIdentityComponent,

    MarketingAdvertisingComponent,
    PpcCampaignComponent,
    EmailMarketingComponent,
    MarketingStrategyComponent,

    WebDevelopmentComponent,
    RestaurantWebappComponent,
    CrmWebappComponent,
    MaintenanceSupportComponent,

    MyAreaComponent,
    SignInComponent,

    ServicesComponent,
    GlossaryComponent,
    AboutComponent
  ]
})
export class SharedModule { }
