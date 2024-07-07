import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  http:HttpClient = inject(HttpClient);

  getStudents() {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/employees/', options);
  }

  getStudentsById() {
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    const options = {headers: headers};

    return this.http.get('http://localhost:3000/employees/1', options);
  }

}
