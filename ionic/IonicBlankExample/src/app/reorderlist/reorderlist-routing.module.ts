import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderlistPage } from './reorderlist.page';

const routes: Routes = [
  {
    path: '',
    component: ReorderlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderlistPageRoutingModule {}
