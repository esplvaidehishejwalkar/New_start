import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl:"./contact.html",
  styles: ['../styles.css']
})
export class ContactComponent implements OnInit {
  private actualUSD=40;
  date=new Date(2018,11,25);
  change= true;
  discount: number=0.25;
  uppercase="Awaken To A Different World!!!."
  get amount(){
    return this.INR? this.actualUSD*70:this.actualUSD
  }
 
  INR=true
  get format()
  {
    return this.INR? 'INR':'USD'
  }
  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  toggle(){
    this.INR=!this.INR
  }
  get format1(){
    return this.change ? 'shortDate' : 'fullDate';
  }
  toggleFormat()
   { 
     this.change = !this.change; 
    }

     get format2(){
      return this.uppercase ? 'uppercase' : 'lowercase';
    }
}
