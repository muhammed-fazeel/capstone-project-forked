import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UpskillService {

  baseUrl:string="http://localhost:7285/api/UpSkill/";
  constructor(private http:HttpClient,private router:Router) { }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"GetAllCategories");
  }
}
