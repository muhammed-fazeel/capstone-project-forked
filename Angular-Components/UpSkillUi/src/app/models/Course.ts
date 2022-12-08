import { Component } from "@angular/core";

export class Course{
<<<<<<< HEAD
    courseId:number;
    categoryId:number;
    title:string;
    price:number;
    author:string;
    rating:number;
    duration:number;
    noOfLectures:number;
    thumbnailUrl:string;
    description:string
    constructor(courseId:number,categoryId:number,title:string,price:number,author:string,rating:number,duration:number,noOfLectures:number,thumbnailUrl:string,description:string){
        this.courseId=courseId;
        this.categoryId=categoryId;
        this.title=title;
        this.price=price;
        this.author=author;
        this.rating=rating;
        this.duration=duration;
        this.noOfLectures=noOfLectures;
        this.thumbnailUrl=thumbnailUrl;
        this.description=description;
=======
    CourseId:number;
    CategoryId:number;
    Title:string;
    price:number;
    Author:string;
    Rating:number;
    Duration:number;
    NoOfLectures:number;
    ThumbnailUrl:string;
    Description:string
    constructor(CourseId:number,CategoryId:number,Title:string,price:number,Author:string,Rating:number,Duration:number,NoOfLectures:number,ThumbnailUrl:string,Description:string){
        this.CourseId=CourseId;
        this.CategoryId=CategoryId;
        this.Title=Title;
        this.price=price;
        this.Author=Author;
        this.Rating=Rating;
        this.Duration=Duration;
        this.NoOfLectures=NoOfLectures;
        this.ThumbnailUrl=ThumbnailUrl;
        this.Description=Description;
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
    }
}