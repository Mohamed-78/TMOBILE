import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiktokPage } from './tiktok.page';

const routes: Routes = [
  {
    path: '',
    component: TiktokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiktokPageRoutingModule {}
