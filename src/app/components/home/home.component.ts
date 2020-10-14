import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 count:number[]=[1,2,3,4,5,6]
 alpha=[]
 numbers=[]
 hello = []
 s=[]
 list1 = [{"id":"1","display":"Volvo"},{"id":"2","display":"Saab"},{"id":"3","display":"Opel"},{"id":"4","display":"Audi"}]
 lsit2 = []
  constructor( private authservice:AuthService ) { }

  ngOnInit() {
   
    console.log(this.hello)
     this.lsit2 = this.list1
     console.log(this.lsit2 )

    for (let i = 65; i <= 90;i++) {
      this.alpha.push(String.fromCharCode(i));
  }
  for(let i=0;i<this.alpha.length;i++){
    this.numbers.push(i)
  }
  for(var i=0;i<this.alpha.length;i++){
    this.hello[i]  = this.alpha[i].concat('-').concat(this.numbers[i])
     }
    
  }
  ClickOnMe()
  {
    // this.count = this.count + 1
    // console.log("this.count",this.count)
    this.authservice.updatemsg(this.count)
    // this.authservice.showLoading();
    this.authservice.alert("success")
  }
  onSubmit(f: NgForm) {
    console.log(f.value); 
  }

  onSearchByKeywords(val) {
      console.log("valueee",val)
      for (var i=0; i < this.lsit2.length; i++) {
        if (this.lsit2[i].display === val) {
            return this.lsit2[i];
        }
    }
  }
}
