import { Component } from "@angular/core";
import { User } from "./User";

export class EnrolledCourses{

    enrolledCoursesId:number;
    userId:number;
    courseID:number;
    constructor(enrolledCoursesId:number,userId:number,courseID:number){
        this.enrolledCoursesId=enrolledCoursesId;
        this.userId=userId;
        this.courseID=courseID;
    }
}