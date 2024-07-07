import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees: any;

  constructor(private userService: UserService){
    this.employees = userService.getEmployees();
    console.log(this.employees);
  }
}
