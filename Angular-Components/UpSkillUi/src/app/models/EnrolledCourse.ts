import { Component } from "@angular/core";
import { User } from "./User";

export class EnrolledCourses{
<<<<<<< HEAD
    enrolledCoursesId:number;
    userId:number;
    courseID:number;
    constructor(enrolledCoursesId:number,userId:number,courseID:number){
        this.enrolledCoursesId=enrolledCoursesId;
        this.userId=userId;
        this.courseID=courseID;
=======
    EnrolledCoursesId:number;
    UserId:number;
    CourseID:number;
    constructor(EnrolledCoursesId:number,UserId:number,CourseID:number){
        this.EnrolledCoursesId=EnrolledCoursesId;
        this.UserId=UserId;
        this.CourseID=CourseID;
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
    }
}