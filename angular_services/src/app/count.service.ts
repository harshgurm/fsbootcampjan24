import { Injectable, inject } from '@angular/core';
import { HospitalDoctorsService } from './hospital-doctors.service';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { 
    this.numOfDoctors = this.hospitalService.getDoctors();
  }

  numOfDoctors = 0;
  hospitalService: HospitalDoctorsService = inject(HospitalDoctorsService);
}
