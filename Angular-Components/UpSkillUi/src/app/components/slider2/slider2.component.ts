import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  courses: Course[] = []
  cor:Course=new Course(1,"",1,"",1,1,1,"","");
  rating_arr:number[]=[];
  list_videos:VideoLinks[]=[];

  constructor(private upskillService: UpskillService,private router:Router) { }
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
      this.rating_arr=[];
      console.log(data);
      console.log(this.cor);
      for (let index = 0; index < this.cor.rating; index++) {
        this.rating_arr.push(index);
      }
    });

    this.formModal.show();
  }
  doSomething(){
    console.log("buttonClicked");
    this.formModal.hide();
  }
  buttonClick(){
    console.log("buttonClicked");
  }

  showCoursePage(cid:number){
    //fetch all the courses by catid using service
    this.upskillService.GetVideoLinksByCourseId(cid)
    .subscribe(data=>{
      this.list_videos=data;
      console.log('x:',this.list_videos);
    
      this.router.navigate(['/course-page',cid]);
    
    })
  }
}
