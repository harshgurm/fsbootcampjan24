import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  
  // empolyees:{}[] = [];
  employees:any;
  // employeeService: UserService = inject(UserService);

  employeeService:UserService;

  constructor(employeeService:UserService){
    this.employeeService = employeeService;
    this.employees  = this.employeeService.getEmployees();
  }
  
}
