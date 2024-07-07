import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../employees/employees.component';
import { FullTimeEmployeeComponent } from '../full-time-employee/full-time-employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    FullTimeEmployeeComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    EmployeesComponent,
    FullTimeEmployeeComponent
  ]
})
export class EmployeesModule {


 }
