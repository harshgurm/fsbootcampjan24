import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidatePassword } from '../custom-password-validation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  signUpForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), CustomValidatePassword]),
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    gender: new FormControl(""),
  })

  // signUpForm:any;

  formBuilder:FormBuilder = inject(FormBuilder);
  
  ngOnInit(){
    // this.signUpForm = this.formBuilder.group({
    //   email: ["", [Validators.required, Validators.email]],
    //   password: ["", [Validators.required, Validators.minLength(6), CustomValidatePassword]],
    //   first_name: ["", Validators.required],
    //   last_name: ["", Validators.required],
    //   gender: ["", Validators.required],
    // })
  }
  

  submitForm(){
    if(this.signUpForm?.valid){
      console.log(' Form ', this.signUpForm.value);
    }
  }
}
