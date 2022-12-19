import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User=new User(1,1,"","","","");

  constructor(private upSkillservice:UpskillService,private router:Router) { }

  ngOnInit(): void {

  }

  addUser(){
    this.upSkillservice.addUser(this.user).subscribe(res=>{this.router.navigate(["/login"]);})
    alert('user added')

  }

}
