import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbargoodlooking',
  templateUrl: './navbargoodlooking.component.html',
  styleUrls: ['./navbargoodlooking.component.css']
})
export class NavbargoodlookingComponent implements OnInit {
  logInFlag:boolean=true;
  public totalItem:number=0;
  mentor:boolean=false;
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
