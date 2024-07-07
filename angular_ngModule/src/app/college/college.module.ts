import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from '../college/college.component';
// import { EmployeeComponent } from '../employee/employee.component';



@NgModule({
  declarations: [
    CollegeComponent,
    // EmployeeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollegeComponent,
    // EmployeeComponent
  ]
})
export class CollegeModule { }
