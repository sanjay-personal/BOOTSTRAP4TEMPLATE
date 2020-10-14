import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootsrap4';
   values='3.5'
   constructor(private authservice:AuthService)
   {

   }
  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }

  login()
  {
    

    // console.log(this.authservice.getemail())
    return (this.authservice.getemail())
  }
}
