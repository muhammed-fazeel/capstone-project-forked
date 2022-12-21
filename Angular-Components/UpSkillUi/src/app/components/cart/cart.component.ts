import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any=[];
  public grandTotal !: number;
  rating_arr: number[] = [];
  
  constructor(private cartService: CartService, private upskillService:UpskillService , private router:Router) { }

  ngOnInit(): void {
    // this.cartService.getProduct()
    // .subscribe(res=>{
    //   this.product=res;
    //   this.grandTotal=this.cartService.getTotalPrice();
    // })
    var courses=localStorage.getItem("localCart");
    var cart=courses!==null?JSON.parse(courses):"nothing";
    this.product=cart;


  }

  removeItem(courseId: Number){
    // this.cartService.removeCartItem(item);
    // console.log(item);

    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:Course[]=JSON.parse(cartData);
      items=items.filter((items:Course)=>courseId!=items.courseId);
      localStorage.setItem('localCart',JSON.stringify(items));
    }
    location.reload();
  }

  emptyCart(){
    this.cartService.removeAllCart();
    localStorage.setItem("localCart","");
    location.reload();

    // this.router.navigate(["/profile"]);
    
  }

}
