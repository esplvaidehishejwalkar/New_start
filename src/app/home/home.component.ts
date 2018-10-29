import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:"./home.html" ,
  styles: ['../styles.css']
})
export class HomeComponent implements OnInit {
  Details: VisitorDetails[]=[];
  visitor:VisitorDetails;
  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  validation(){
    this.Details.push(this.visitor);
  this.visitor=new VisitorDetails();
  }

}
export class VisitorDetails{
  constructor(
      name: string = '',
      email: string ="",
      contact: number=9,
      date:Date = new Date(),
  ){

  }

}