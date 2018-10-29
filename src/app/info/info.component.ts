import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl:"./info.html",
  styles: ['../styles.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
}
