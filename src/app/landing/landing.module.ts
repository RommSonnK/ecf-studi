import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import {HeaderComponent} from "../components/header/header.component";
import {BannerNavComponent} from "../components/banner-nav/banner-nav.component";
import {BannerServiceComponent} from "../components/banner-service/banner-service.component";
import {CardServiceComponent} from "../components/card-service/card-service.component";
import {WhoAreUsComponent} from "../components/who-are-us/who-are-us.component";
import {SectionCommitComponent} from "../components/section-commit/section-commit.component";
import {SectionContactComponent} from "../components/section-contact/section-contact.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
  ],
  declarations: [LandingPage, HeaderComponent, BannerNavComponent, BannerServiceComponent, CardServiceComponent, WhoAreUsComponent, SectionCommitComponent, SectionContactComponent],
  exports: [
    HeaderComponent,
    BannerNavComponent,
    BannerServiceComponent,
    CardServiceComponent
  ]
})
export class LandingPageModule {}