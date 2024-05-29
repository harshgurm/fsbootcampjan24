import { Component, inject } from '@angular/core';
import { AuthdataService } from '../authdata.service';

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

  authService:AuthdataService = inject(AuthdataService);

  signUp(form:any){
    console.log(form);
    if(form.valid){
      this.authService.signUp(form.form.value).subscribe((result:any) => {
        console.log(result);
      });
    }
    
  }

}
