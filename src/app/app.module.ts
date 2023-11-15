import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {BannerNavComponent} from "./components/banner-nav/banner-nav.component";
import {BannerServiceComponent} from "./components/banner-service/banner-service.component";
import {CardServiceComponent} from "./components/card-service/card-service.component";
import {WhoAreUsComponent} from "./components/who-are-us/who-are-us.component";
import {SectionCommitComponent} from "./components/section-commit/section-commit.component";
import {SectionContactComponent} from "./components/section-contact/section-contact.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerNavComponent, BannerServiceComponent, CardServiceComponent, WhoAreUsComponent, SectionCommitComponent, SectionContactComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
