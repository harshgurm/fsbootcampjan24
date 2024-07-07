import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  // userService:any;
  
  // constructor(userService: UserService) {
  //   this.userService = UserService;
  //   console.log(this.userService.getUsers()); 
  // }

  users:any;

  // constructor(private userService:UserService){
  //   this.users = userService.getUsers();
  //   console.log(this.users);
  // }

  userService:UserService = inject(UserService);

  constructor(){
    this.users = this.userService.getUsers();
  }

}
