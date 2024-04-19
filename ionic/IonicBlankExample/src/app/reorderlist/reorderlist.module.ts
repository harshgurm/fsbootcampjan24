import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderlistPageRoutingModule } from './reorderlist-routing.module';

import { ReorderlistPage } from './reorderlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderlistPageRoutingModule
  ],
  declarations: [ReorderlistPage]
})
export class ReorderlistPageModule {}
