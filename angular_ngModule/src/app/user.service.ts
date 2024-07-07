import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { id: 1, name:"Harsh" },
    { id: 2, name:"Nora" },
    { id: 3, name:"David" },
    { id: 4, name:"Queen" },
    { id: 5, name:"Elona" },
  ]

  getUsers(){
    return this.users;
  }

  constructor() { }
}
