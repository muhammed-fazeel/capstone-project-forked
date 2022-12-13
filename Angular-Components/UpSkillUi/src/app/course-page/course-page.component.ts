import { Component, OnInit } from '@angular/core';
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
  constructor(private upskillservice:UpskillService) { }

  ngOnInit(): void {
    this.upskillservice.GetVideoLinksByCourseId(this.id).subscribe(data=>{
      this.videolinks=data;
      console.log(this.videolinks);
    })
  }

}
