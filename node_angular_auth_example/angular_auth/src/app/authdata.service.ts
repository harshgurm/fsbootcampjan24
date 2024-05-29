import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthdataService {

  constructor() { }

  http: HttpClient = inject(HttpClient);

  signIn(data: {}){
    return this.http.post('http://localhost:3000/login', data);
  }

  signUp(data: {}){
    return this.http.post('http://localhost:3000/register/', data);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
