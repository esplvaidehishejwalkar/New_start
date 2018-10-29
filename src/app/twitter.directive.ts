import { Directive} from '@angular/core';
import{ElementRef} from '@angular/core';
@Directive({
  selector: '[appTwitter]'
})
export class TwitterDirective {
  element:ElementRef 

  constructor(private el: ElementRef) {
    el.nativeElement.style.color="white"
    el.nativeElement.style.backgroundcolor="black"
    this.element=el
   }
ngOnInIt(){
  this.element.nativeElement.innerText+="#travel#Holidays#India"
}
}
