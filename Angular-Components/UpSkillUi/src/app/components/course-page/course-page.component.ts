import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { Review } from 'src/app/models/Review';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courseId:number=5;
  textclass='text';
  course=new Course(1,"",1,"",1,1,1,"","");
  coursetitle:string="";
  videolinks:VideoLinks[]=[];
  reviews:Review[]=[];
  present_video:SafeResourceUrl="https://www.youtube.com/watch?v=nOY0TWWvynU";
  constructor(private upskillservice:UpskillService,public sanitizer:DomSanitizer,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        // console.log(params);
        let catId = params["id"];
      });
    this.upskillservice.GetVideoLinksByCourseId(this.courseId).subscribe(data=>{
      this.videolinks=data;
      // console.log(this.videolinks);
    });
    this.upskillservice.getReviews(this.courseId).subscribe(data=>{
      this.reviews=data;
    });
    this.upskillservice.getCourseById(this.courseId).subscribe(data=>{
      this.course=data;
    });
  }
  showVideo(v:VideoLinks){
    this.present_video=this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
    // console.log(this.present_video);
    this.textclass='textnew';
    this.coursetitle=v.title;
  }


}
