import { Component } from "@angular/core";

export class User {
<<<<<<< HEAD
    userId:number;
    roleId:number;
    userName:string;
    password:string;
    email:string;
    pictureUrl:string;
    constructor(userId:number,roleId:number,userName:string,password:string,email:string,pictureUrl:string){
       this.userId=userId;
       this.roleId=roleId;
       this.userName=userName;
       this.password=password;
       this.email=email;
       this.pictureUrl=pictureUrl;
=======
    UserId:number;
    RoleId:number;
    UserName:string;
    Password:string;
    Email:string;
    PictureUrl:string;
    constructor(UserId:number,RoleId:number,UserName:string,Password:string,Email:string,PictureUrl:string){
       this.UserId=UserId;
       this.RoleId=RoleId;
       this.UserName=UserName;
       this.Password=Password;
       this.Email=Email;
       this.PictureUrl=PictureUrl;
>>>>>>> 3110f6dbd714d9282b2726b9be23b81f7aeab931
    }
}