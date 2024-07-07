import { Injectable, inject } from '@angular/core';
import { HospitalDoctorsService } from './hospital-doctors.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {
  // hostpitalService: HospitalDoctorsService;

  // constructor(hospitalService: HospitalDoctorsService) { 
  //   this.hostpitalService = hospitalService;
  // }

  // count(){
  //   return this.hostpitalService.getdoctorsTotal();
  // }

  hostpitalService: HospitalDoctorsService = inject(HospitalDoctorsService);
  http: HttpClient = inject(HttpClient);

  count(){
      return this.hostpitalService.getdoctorsTotal();
  }

  

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept':'application/json'});
    const options = {headers:headers};

    return this.http.get('http://localhost:3000/employees/', options);    
  }

  // constructor(private http: HttpClient) { 
  // }
}
