import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //fix this thing

  logInFlag:boolean=false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("email")?.length!=0){
      this.logInFlag=true;
    };
  }

}
