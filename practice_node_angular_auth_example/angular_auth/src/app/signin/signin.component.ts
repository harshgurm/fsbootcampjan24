import { Component, inject } from '@angular/core';
import { AuthdataService } from '../authdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  authService: AuthdataService = inject(AuthdataService);
  router: Router = inject(Router);

  signInDetails = {
    username: '',
    password: '',
  }

  signIn(form:any){
    console.log(form);
    if(form.form.valid){
      this.authService.signIn(form.form.value).subscribe((result:string) => {        
        localStorage.setItem('token', result);
        this.router.navigate(['home']);
      })
    }
  }
}
