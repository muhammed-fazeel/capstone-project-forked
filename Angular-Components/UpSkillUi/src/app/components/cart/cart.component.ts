import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any=[];
  public grandTotal !: number;
  rating_arr: number[] = [];
  constructor(private cartService: CartService ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
