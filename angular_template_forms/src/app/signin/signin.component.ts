import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  signInDetails = {
    email: '',
    password: '',
  }

  authService: AuthServiceService = inject(AuthServiceService);

  onSubmit(form:any){
    
    if(form.valid){
      this.authService.signIn(form.form.value).subscribe((result:any) => {
        console.log(result);
        localStorage.setItem('token', result);       
       }) 
    }
  }

}
