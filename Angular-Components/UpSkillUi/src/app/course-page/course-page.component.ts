import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoLinks } from '../models/VideoLinks';
import { UpskillService } from '../services/upskill.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  id:number=1;
  videolinks:VideoLinks[]=[];
  present_video:SafeResourceUrl="https://www.youtube.com/watch?v=nOY0TWWvynU";
  constructor(private upskillservice:UpskillService,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.upskillservice.GetVideoLinksByCourseId(this.id).subscribe(data=>{
      this.videolinks=data;
      console.log(this.videolinks);
    })
  }

  showVideo(v:VideoLinks){
    this.present_video=this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
    console.log(this.present_video);

  //   let ele = document.getElementById("video");
  //   if(ele!=null){
  //     ele.src=v.url;
  }
}
