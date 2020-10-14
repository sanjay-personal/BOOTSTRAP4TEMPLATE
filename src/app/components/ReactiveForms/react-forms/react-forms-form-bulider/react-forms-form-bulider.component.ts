import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-forms-form-bulider',
  templateUrl: './react-forms-form-bulider.component.html',
  styleUrls: ['./react-forms-form-bulider.component.scss']
})
export class ReactFormsFormBuliderComponent implements OnInit,AfterViewInit {
  registrationForm: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    console.log("HELOO!")

    this.registrationForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password: [],
      confirmPassword: [],
      address : this.fb.group({
        state: [],
        city: [],
        postalCode : [],
      })
    })
  }

  ngAfterViewInit() {
    console.log("HELOO!2")
  }

  

  onSubmit() {
    console.log(this.registrationForm);
  //  console.log(this.registrationForm.invalid)
    if (!this.registrationForm.invalid) { // Checks form input validity
      // Form input is valid
      console.log('Valid login attempt - allow submission');
  } else {
      // Form input is not valid
      this.registrationForm.markAllAsTouched(); // Trigger validation across form
      console.log('Invalid login attempt - block submission');
  }
  }

  
}
