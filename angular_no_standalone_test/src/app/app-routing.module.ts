import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CustomModule } from './custom/custom.module';
const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'custom',
    component: CustomModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
