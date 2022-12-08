import { Component } from "@angular/core";

export class Review{
<<<<<<< HEAD
    reviewId:number;
    courseId:number;
    author:string;
    date:Date;
    rating:number;
    description:string;
    constructor(reviewId:number,courseId:number,author:string,date:Date,rating:number,description:string){
       this.reviewId=reviewId;
       this.courseId=courseId;
       this.author=author;
       this.date=date;
       this.rating=rating;
       this.description=description;
=======
    ReviewId:number;
    CourseId:number;
    Author:string;
    Date:Date;
    Rating:number;
    Description:string;
    constructor(ReviewId:number,CourseId:number,Author:string,Date:Date,Rating:number,Description:string){
       this.ReviewId=ReviewId;
       this.CourseId=CourseId;
       this.Author=Author;
       this.Date=Date;
       this.Rating=Rating;
       this.Description=Description;
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
    }
}