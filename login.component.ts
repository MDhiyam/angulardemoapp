import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrNotificationService } from '../services/toastr-notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authentication:AuthenticationService , private router:Router , private toastr:ToastrNotificationService){}

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

    const isUserExist = this.signupUsers.find((m:any) => m.email == this.loginObj.email && m.password == this.loginObj.password);

    console.log(isUserExist);

    if(isUserExist != undefined){
      //window.location.href = "/dashboard";
      // alert('user logged in successfully');
      
      window.location.href = '/dashboard';
      // this.toastr.showSuccess('User Logged in successfully');
    }
    else{
      this.toastr.showError('Invalid Credentials');
    }

    
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
  // }

  // onLogin(){
  //   const isUserExist = this.signupUsers.find((m:any) => m.email == this.loginObj.email && m.password == this.loginObj.password);

  //   if(isUserExist != undefined){
  //     window.location.href = "/dashboard";
  //   }
  //   else{
  //     alert("Invalid credentials");
  //   }
  // }

  visible:boolean = true;
  changetype:boolean = true;

  viewPass(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }

}
