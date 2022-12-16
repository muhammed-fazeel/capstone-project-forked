import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  catId:number=1;
  videolinks:VideoLinks[]=[];
  present_video:SafeResourceUrl="https://www.youtube.com/watch?v=nOY0TWWvynU";
  constructor(private upskillservice:UpskillService,public sanitizer:DomSanitizer,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

 
      this.activatedRoute.params.subscribe(params => {
        console.log(params);
        let catId = params["id"];
  
     
  
  
  
      });

    
    this.upskillservice.GetVideoLinksByCourseId(this.catId).subscribe(data=>{
      this.videolinks=data;
      console.log(this.videolinks);

      
    });
    
  }

  showVideo(v:VideoLinks){
    this.present_video=this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
    console.log(this.present_video);

  //   let ele = document.getElementById("video");
  //   if(ele!=null){
  //     ele.src=v.url;
  }


}
