import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses_list?: Course[] = [];

  constructor(private upskillService: UpskillService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      let catId = params["id"];

      this.upskillService.getCoursesByCat(catId)
        .subscribe(data => {
          this.courses_list = data;
          console.log('data1:', data);
          console.log('cl:', this.courses_list);
        })




    });
  }

}
