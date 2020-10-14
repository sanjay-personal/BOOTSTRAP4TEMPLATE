import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;
declare var bootbox: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private message = new BehaviorSubject([])
  currentmsg = this.message.asObservable()

  constructor(private spinner: NgxSpinnerService) { }


  setloggeeduser(email) {
    localStorage.setItem('emailkey', email)
  }

  getlogedduser() {
    localStorage.getItem('emailkey')
  }

  getemail() {
    if (localStorage.getItem('emailkey') == '123') {
      return true
    }
    // else
    // {
    //   return false
    // }
  }



  updatemsg(x) {
    this.message.next(x)
  }

  showLoading() {
    this.spinner.show(undefined, {
      type: 'ball-clip-rotate-multiple',
      size: 'medium',
      // bdColor: 'rgba(100,149,237, .8)',
      color: 'white',
      fullScreen: false

    })
  }
  hideLoading() {
    this.spinner.hide()
  }

  public alert(msg) {

    var successBox = bootbox.confirm({
      size: "medium",
      title: "Success",
      message: "<strong>" + msg + "</strong>",
      className: "successPopup",
      callback: function (result) { /* your callback code */
       console.log(result)
     }
      // onHide: function(e){
      //   console.log("Hhello",e) 
      // },
      // onShow: function(e){
      //   console.log("Shello",e) 
      // }
    })
    successBox.init(function () {
      $(".successPopup").find(".modal-header").css({ "background-color": "green", "color": "white" });
      $(".bootbox.modal").find(".modal-footer").find('button').css({ "background-color": "green", "color": "white" });

    });
  }
}
