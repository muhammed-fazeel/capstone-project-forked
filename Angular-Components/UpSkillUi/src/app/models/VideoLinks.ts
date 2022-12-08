import { Component } from "@angular/core";

export class VideoLinks {
<<<<<<< HEAD
    videoLinksId:number;
    courseId:number;
    url:string
    duration:number;
    title:string;
    constructor(videoLinksId:number,courseId:number,url:string,duration:number,title:string){
        this.videoLinksId=videoLinksId;
        this.courseId=courseId;
        this.url=url;
        this.duration=duration;
        this.title=title;
=======
    VideoLinksId:number;
    CourseId:number;
    Url:string
    Duration:number;
    Title:string;
    constructor(VideoLinksId:number,CourseId:number,Url:string,Duration:number,Title:string){
        this.VideoLinksId=VideoLinksId;
        this.CourseId=CourseId;
        this.Url=Url;
        this.Duration=Duration;
        this.Title=Title;
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
    }
}