import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFlixPageRoutingModule } from './detail-flix-routing.module';

import { DetailFlixPage } from './detail-flix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFlixPageRoutingModule
  ],
  declarations: [DetailFlixPage]
})
export class DetailFlixPageModule {}
