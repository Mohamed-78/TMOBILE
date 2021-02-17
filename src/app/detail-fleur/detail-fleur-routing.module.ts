import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFleurPage } from './detail-fleur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFleurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFleurPageRoutingModule {}
