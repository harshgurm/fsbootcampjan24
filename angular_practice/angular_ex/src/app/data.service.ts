import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllPersons(): Person[] {
    return this.persons;
  }
  
  getPersonById(id: number): Person | undefined {
    return this.persons.find(person => person.id === id);
  }

  persons: Person[] = [ // create an array of students
  {id:1, name: "Harry"},
  {id:2, name: "Gurm"},
  {id:3, name: "Test"}
  ];

}
