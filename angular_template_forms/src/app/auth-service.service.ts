import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  http:HttpClient =inject(HttpClient);

  signUp(data:{}) {
    console.log(data);
    // const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    // const options = {headers: headers};

    return this.http.post('http://localhost:3000/register/', data);
  }

  signIn(data:{}) {
    // const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
    // const options = {headers: headers};

    return this.http.post('http://localhost:3000/login/', data);
  }

  constructor() { }
}
