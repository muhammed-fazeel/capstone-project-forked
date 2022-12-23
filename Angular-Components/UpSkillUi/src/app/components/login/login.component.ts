import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGrp: FormGroup;

  userName=new FormControl("dhruvfrom");
  password = new FormControl();
  roleId=new FormControl();
  email=new FormControl();
  // pictureUrl=new FormControl();
  
  constructor(private authService: AuthenticationService) {

    this.formGrp = new FormGroup({
      userName:this.userName,
      email:this.email,
      password: this.password,
      roleId:this.roleId,
      
        })
  }

  ngOnInit(): void {
  }

  loginSubmit(user:User) { 
    this.authService.authenticateUser(user); 
    // location.reload();
        
  }
}
