import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickdirective]'
})
export class ClickdirectiveDirective {
  @Input() a:string
  constructor() { }
  @HostListener('a',['$event']) onClick(e:any) {
    alert("hello");
  }
  // @HostListener('a',['$event']) onMouseHover(e:any) {
  //   alert("hello");
  // }
 


}
