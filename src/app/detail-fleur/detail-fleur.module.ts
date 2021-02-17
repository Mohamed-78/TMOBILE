import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFleurPageRoutingModule } from './detail-fleur-routing.module';

import { DetailFleurPage } from './detail-fleur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFleurPageRoutingModule
  ],
  declarations: [DetailFleurPage]
})
export class DetailFleurPageModule {}
