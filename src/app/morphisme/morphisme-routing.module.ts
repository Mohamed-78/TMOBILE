import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorphismePage } from './morphisme.page';

const routes: Routes = [
  {
    path: '',
    component: MorphismePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MorphismePageRoutingModule {}
