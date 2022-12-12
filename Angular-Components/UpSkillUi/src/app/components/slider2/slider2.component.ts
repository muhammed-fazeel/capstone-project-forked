import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  courses: Course[] = []
  cor:Course=new Course(1,1,"",1,"",1,1,1,"","");

  constructor(private upskillService: UpskillService) { }
  formModal:any;
  ngOnInit(): void {
    console.log("service called!")
    this.upskillService.getAllCourses()
      .subscribe(data => {
        this.courses=data;
      })
  }
  openModal(courseId:number){
    this.upskillService.getCourseById(courseId).subscribe(data => {
      this.cor=data;
      console.log(data);
      console.log(this.cor);
    });
  }
  doSomething(){
    this.formModal.hide();
  }
  buttonClick(){
    console.log("buttonClicked");
  }
}
