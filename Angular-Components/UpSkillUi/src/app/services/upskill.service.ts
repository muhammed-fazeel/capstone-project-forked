import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Category } from '../models/Category';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../models/Course';
import { map } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UpskillService {

  baseUrl:string="https://localhost:7285/api/UpSkill/";
  constructor(private http:HttpClient,private router:Router) { }

  //calls for categories
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"GetAllCategories");
  }

  //calls for courses

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+"Get")
  }

  getUserByEmail():Observable<User>{
    //edit here please :)
    var email=localStorage.getItem("email");
    return this.http.get<User>(this.baseUrl+"GetUserByEmail?email="+email);
  }

  //calls for videolinks

  //calls for enrolledCourses

  //calls for Reviews

  //calls for Role

  //calls for User
  getUser():Observable<User>{
    return this.http.get<User>(this.baseUrl+"")
  }


  
}
