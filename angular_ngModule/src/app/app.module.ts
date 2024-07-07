import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegeModule } from './college/college.module';
import { DirectRootComponentComponent } from './direct-root-component/direct-root-component.component';
import { CustomModuleModule } from './custom-module/custom-module.module';
import { EmployeeComponent } from './employee/employee.component';
import { ComponentExampleComponent } from './component-example/component-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DirectRootComponentComponent,
    EmployeeComponent,
    ComponentExampleComponent
  ],
  imports: [
    BrowserModule,
    CollegeModule,
    CustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
