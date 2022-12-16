import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '../models/token-response';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }


  authenticateUser(user: User) {
    this.http.post<TokenResponse>("https://localhost:7285/api/Login/Login", {
      "userName":user.userName,
      "password":user.password,
      "email":user.email,
      "roleId":user.roleId
    })
      .subscribe(
        res=> {
          console.log(res);          
          //redirect to home
          localStorage.setItem("token", res.token);
          localStorage.setItem("email",user.email)
          this.router.navigate(["/"]);
          console.log("Everything is fine!");
          
        },
        err => { 
          console.log(err.status);
         });
  }
}