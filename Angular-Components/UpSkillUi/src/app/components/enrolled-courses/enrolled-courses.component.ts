import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(private upskillService:UpskillService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.upskillService.getEnrolledCoursesById(1));
  }

}
