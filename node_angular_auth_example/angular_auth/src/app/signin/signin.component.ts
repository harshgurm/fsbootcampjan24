import { Component, inject } from '@angular/core';
import { AuthdataService } from '../authdata.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  authService: AuthdataService = inject(AuthdataService);

  signInDetails = {
    username: '',
    password: '',
  }

  signIn(form:any){
    console.log(form);
    if(form.form.valid){
      this.authService.signIn(form.form.value).subscribe((result:string) => {        
        localStorage.setItem('token', result);
      })
    }
  }
}
