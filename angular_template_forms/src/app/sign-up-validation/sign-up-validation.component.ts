import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-validation',
  templateUrl: './sign-up-validation.component.html',
  styleUrl: './sign-up-validation.component.css'
})
export class SignUpValidationComponent {

  signUpDetails = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: '',
  }

  onSubmit(form:any){
    console.log('HERE');
    if(form.valid){
      console.log('Form', form);
    }
  }

}
