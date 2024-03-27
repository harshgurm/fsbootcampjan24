import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    gender: new FormControl(''),
  });

}
