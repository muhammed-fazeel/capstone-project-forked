import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  courses: Course[] = []
  cor: Course = new Course(1,"",1,"",1,1,1,"","");
  rating_arr: number[] = [];
  public productList:any;

  constructor(private upskillService: UpskillService, private cartService: CartService) { }
  formModal: any;
  ngOnInit(): void {
    console.log("service called!")
    this.upskillService.getAllCourses()
      .subscribe(data => {
        this.courses = data;
      })

     this.upskillService.getCourse()
    .subscribe(res=>{
      this.productList=res;
      this.productList.array.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log("service called again!")
    })

  }
  openModal(courseId: number) {
    this.upskillService.getCourseById(courseId).subscribe(data => {
      this.cor = data;
      this.rating_arr = [];
      console.log(data);
      console.log(this.cor);
      for (let index = 0; index < this.cor.rating; index++) {
        this.rating_arr.push(index);
      }
    });

    this.formModal.show();
  }
 
  addToCart(cor:Course) {
    this.cartService.addtoCart(this.cor);
    this.formModal.hide();
  }
}