import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.scss']
})
export class ReactFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registrationForm = new FormGroup({
    username: new FormControl('Sanjay'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  })
  onSubmit() {
    console.log(this.registrationForm.value);
  }

  onLoadAPISetValue() {
    this.registrationForm.setValue({
      username : 'Anjan',
      password : 123,
      confirmPassword : 123,
      address:{
      city : 'Hyd',
      state : 'TS',
      postalCode : '500067'
    }
    })
  }
  onLoadAPIPatchValue() {
    this.registrationForm.patchValue({
      username : 'Anjan',
      password : 123,
      confirmPassword : 123,
    //   address:{
    //   city : 'Hyd',
    //   state : 'TS',
    //   postalCode : '500067'
    // }
    })
  }
}
