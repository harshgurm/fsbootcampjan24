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

  // getPersonById(id:number): Person | undefined {
  //   return this.persons.find(p => p.id == id)
  // }

  persons:Person[] = [
    { id:1, name: "Harsh" },
    { id:2, name: "Queen" },
    { id:3, name: "Elona" },
    { id:5, name: "David" },
    { id:6, name: "Renan" },
    { id:7, name: "Prosper" },
    { id:8, name: "Nora" },
  ];
  
}
