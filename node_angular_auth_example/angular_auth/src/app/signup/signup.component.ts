import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpDetails = {
    username: '',
    password: '',
    confirm_password: ''
  }

  signUp(form:{}){
    console.log(form);
  }

}
