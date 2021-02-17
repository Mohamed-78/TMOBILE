import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorphismePageRoutingModule } from './morphisme-routing.module';

import { MorphismePage } from './morphisme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorphismePageRoutingModule
  ],
  declarations: [MorphismePage]
})
export class MorphismePageModule {}
