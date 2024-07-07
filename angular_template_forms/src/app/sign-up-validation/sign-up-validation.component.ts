import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-up-validation',
  templateUrl: './sign-up-validation.component.html',
  styleUrl: './sign-up-validation.component.css'
})
export class SignUpValidationComponent {

  signUpDetails = {
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    gender: '',
  }

  authService: AuthServiceService = inject(AuthServiceService);

  onSubmit(form:any){
    
    if(form.valid){
      this.authService.signUp(form.form.value).subscribe((result:any) => {
        console.log(result);        
       }) 
    }
  }

}
