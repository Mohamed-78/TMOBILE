import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiktokPageRoutingModule } from './tiktok-routing.module';

import { TiktokPage } from './tiktok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiktokPageRoutingModule
  ],
  declarations: [TiktokPage]
})
export class TiktokPageModule {}
