import { Component } from "@angular/core";

export class Category{
    CategoryId:number;
    CategoryName:string
    ImageUrl:string
    constructor(CategoryId:number,CategoryName:string,ImageUrl:string){
        this.CategoryId=CategoryId;
        this.CategoryName=CategoryName;
        this.ImageUrl=ImageUrl;
    }
}