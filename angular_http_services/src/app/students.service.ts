import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  http:HttpClient = inject(HttpClient);

  //get
  getEmployees(){
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
  }
  //getById
  //Post
  //Delete
}
