import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatePassword } from '../custom-password-validation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {


  // formBuilder:FormBuilder = inject(FormBuilder);

  signUpForm:any;

  constructor(formBuilder: FormBuilder){
    this.signUpForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), ValidatePassword]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: [''],
    });
  }

  // signUpForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(6), ValidatePassword]),
  //   first_name: new FormControl('', Validators.required),
  //   last_name: new FormControl('', Validators.required),
  //   gender: new FormControl(''),
  // });

  submitForm(){
    if(this.signUpForm?.valid){
      console.log('Form Submission',this.signUpForm);
    }
  }

}
