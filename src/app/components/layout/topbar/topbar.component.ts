import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('emailkey')
    this.authservice.loginStateChanged()
      this.router.navigate(['login'])
  }

}
