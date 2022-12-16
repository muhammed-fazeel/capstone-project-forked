import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //fix this thing

  logInFlag:boolean=true;
  public totalItem:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res =>{
      this.totalItem=res.length;
    })

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
