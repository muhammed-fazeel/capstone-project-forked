import { Component } from "@angular/core";

export class Review{
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

    }
}