import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appIsLoggedUser]'
})
export class IsLoggedUserDirective {

  constructor(private authservice:AuthService, private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,private router: Router) { }

  @Input() set appIsLoggedUser(obj: any) {
    const dis = this;
    dis.authservice.loginState.subscribe(a => {
      const isLoggedIn = dis.authservice.getemail();
    if (!isLoggedIn) {
      this.viewContainer.clear();
      this.router.navigate(['login'])
      return;
    }
    this.viewContainer.createEmbeddedView(this.templateRef);
    })
    const isLoggedIn = this.authservice.getemail();
    if (!isLoggedIn) {
      this.viewContainer.clear();
      this.router.navigate(['login'])
      return;
    }
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

}
