import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalDoctorsService {

  constructor() { }

  getDoctors() {
    return this.doctors.length;
  }

  doctors = [
    {name: 'Harsh', specialize: 'Medicine'},
    {name: 'Nora', specialize: 'Dermatology'},
    {name: 'David', specialize: 'Medicine'},
  ]
}
