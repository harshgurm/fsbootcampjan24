import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModuleComponent } from './custom-module.component';



@NgModule({
  declarations: [
    CustomModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomModuleComponent
  ]
})
export class CustomModuleModule { }
