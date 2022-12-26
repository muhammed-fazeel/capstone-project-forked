// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from 'src/app/models/User';
// import { UpskillService } from 'src/app/services/upskill.service';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {

//   client:User=new User(0,0,"","","","");

//   constructor(private upSkillservice:UpskillService,private router:Router) { }

//   ngOnInit(): void {
//   }
//   addUser(){
//     var response:any= null;
//     console.log("singup called");
//     this.upSkillservice.addUser(this.client).subscribe(res=>{
//       console.log(res); 
//       response = res;
//       console.log('response:',response.msg);
//       if(response.msg==="duplicate"){
//                alert("Email Already exist");
//       }
//       else{
//          this.router.navigate(['/login']);
//       }
//     });
//   }
// }

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

  client:User=new User(0,0,"","","","");

  constructor(private upSkillservice:UpskillService,private router:Router) { }

  ngOnInit(): void {

  }

  addUser(){
    var response:any= null;
    console.log("singup called");
    this.upSkillservice.addUser(this.client).subscribe(res=>{
      console.log(res); 
      response = res;
      console.log('response:',response.msg);
      //window.alert(response.msg);
      if(response.msg==="duplicate"){
               alert("Email Already exist");
      }
      else{
        // alert(response.msg+" please try with other email id");
         this.router.navigate(['/login']);

      }
    });

  }
  

}