import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { Review } from 'src/app/models/Review';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  date=new Date();
  author:string="";
  review= new Review(1,"",this.date,1,"");
  courseId:number=5;
  textclass='text';
  course=new Course(1,"",1,"",1,1,1,"","");
  coursetitle:string="";
  videolinks:VideoLinks[]=[];
  reviews:Review[]=[];
  roleId:boolean=false;
  present_video:SafeResourceUrl="https://www.youtube.com/watch?v=nOY0TWWvynU";
  constructor(private upskillservice:UpskillService,public sanitizer:DomSanitizer,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("roleId") as unknown as string=="2"){
      this.roleId=true;
  };

      this.activatedRoute.params.subscribe(params => {
        // console.log(params);
        this.courseId = params["id"];
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

    this.upskillservice.getUserByEmail().subscribe(data=>{
      this.author=data.userName;
      console.log(this.author);
    })
  }
  showVideo(v:VideoLinks){
    this.present_video=this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
    // console.log(this.present_video);
    this.textclass='textnew';
    this.coursetitle=v.title;
  }
  addReview( ){
    this.review.date=this.date;
    this.review.author=this.author;
    this.review.courseId=this.courseId;
    this.upskillservice.addReview(this.review).subscribe(res=>{this.router.navigate(["/course-page"]);location.reload()})
  }

}
