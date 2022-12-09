import { Component } from "@angular/core";

export class Course{
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
<<<<<<< HEAD

=======
>>>>>>> f78944666d894652b3390a0b9c9c5337a691ec33
    }
}