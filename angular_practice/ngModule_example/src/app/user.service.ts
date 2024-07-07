import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  getEmployees() {
    return this.employees;
  }

  employees = [ 
    {id:1, name: "Harry"},
    {id:2, name: "Gurm"},
    {id:3, name: "Test"}
  ];

  constructor() { }
}
