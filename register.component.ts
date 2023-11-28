import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor (private authentication:AuthenticationService ,  private router:Router){}

  

  signupUsers:any = [];
  // formdata = { name : "" , email : "" , password : ""};
  signupObj:any = { 
    name : "" , 
    email : "" , 
    password : ""
  };

  loginUsers:any = [];
  // formdata = { name : "" , email : "" , password : ""};
  loginObj:any = { 
    email : "" , 
    password : ""
  };

  submit = false;
  errorMessage = "";
  loading = false;

  onSubmit(){
    this.loading=true;

    //Call register services
    // this.authentication
    // .register(this.formdata.name , this.formdata.email , this.formdata.password);

    this.signupUsers.push(this.signupObj);
    localStorage.setItem('token' , JSON.stringify(this.signupUsers));
    this.signupObj = { 
      name : "" , 
      email : "" , 
      password : ""
    };
    this.router.navigate(['/dashboard']);

    
  }
  ngOnInit(): void {
    const localData = localStorage.getItem('token');
    
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }

  // onSignUp(){
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signupUsers' , JSON.stringify(this.signupUsers));
  //   this.signupObj = { 
  //     name : "" , 
  //     email : "" , 
  //     password : ""
  //   };
  //   this.router.navigate(['/dashboard']);
  // }

  // onLogin(){
  //   const isUserExist = this.signupUsers.find((m:any) => m.email == this.loginObj.email && m.password == this.loginObj.password);

  //   if(isUserExist != undefined){
  //     alert("User login successfully");
  //   }
  //   else{
  //     alert("Invalid credentials");
  //   }
  // }

  visible:boolean = true;
  changetype:boolean = true;

  viewPass(){
    this.visible = false;
    this.changetype = false;
  }


}
