import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Login } from 'src/app/Formmodel/loginpage';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
// emails


  constructor( private authservice:AuthService,private route:Router) { }
   model:Login = new Login(null,null)

  
   ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    if(form.invalid)
    {
      return
    }


    if(this.model.email === '123' && this.model.password === '123')
    {
      this.authservice.setloggeeduser(this.model.email)
       this.route.navigate([''])
      
    }
  }
}
