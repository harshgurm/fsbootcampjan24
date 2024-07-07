import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class HospitalDoctorsService {

  constructor() { 
  }

  getdoctorsTotal(): number {
    return this.doctors.length;
  }

  doctors: Person[] = [
    {id: 1, name: "Sam"},
    {id: 2, name: "Nora"},
    {id: 3, name: "Gurm"},
    {id: 4, name: "Harry"}
  ]
}
