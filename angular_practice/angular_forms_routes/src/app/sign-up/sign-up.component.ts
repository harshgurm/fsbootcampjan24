import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {

  // submitted = false;

  // signUpForm = {
  //   email: '',
  //   password: '',
  //   first_name: '',
  //   last_name: '',
  //   gender: ''
  // }

  onSubmit(form: any) { 
    // this.submitted = true;
    if (form.valid) {
      console.log('Form data:', form);
    }
  }

}
