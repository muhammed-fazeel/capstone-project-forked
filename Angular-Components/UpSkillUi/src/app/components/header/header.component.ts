import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //fix this thing

  logInFlag:boolean=true;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("token")==null){
      this.logInFlag=true;
    }
    else{
      this.logInFlag=false;
    }
  }

  logout(){
    localStorage.clear();
  }

}
