import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeCovidPageRoutingModule } from './welcome-covid-routing.module';

import { WelcomeCovidPage } from './welcome-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeCovidPageRoutingModule
  ],
  declarations: [WelcomeCovidPage]
})
export class WelcomeCovidPageModule {}
