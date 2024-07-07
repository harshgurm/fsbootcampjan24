import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-validation',
  templateUrl: './sign-up-validation.component.html',
  styleUrl: './sign-up-validation.component.css'
})
export class SignUpValidationComponent {
 // submitted = false;

 signUpDetails = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    gender: ''
  }

  onSubmit(form: any) { 
    // this.submitted = true;
    if (form.valid) {
      console.log('Form data:', form);
    }
  }
}
