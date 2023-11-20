import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellsPageRoutingModule } from './sells-routing.module';

import { SellsPage } from './sells.page';
import {LandingPageModule} from "../landing/landing.module";
import {SellsCarComponent} from "../sells-car/sells-car.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellsPageRoutingModule,
    LandingPageModule
  ],
  declarations: [SellsPage, SellsCarComponent]
})
export class SellsPageModule {}
