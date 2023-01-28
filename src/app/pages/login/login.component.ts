import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService,private router:Router){}
  model:Login={
    email:'',
    password:''
  }
  errFlag=false
  errMsg=""
  handellogin(form:NgForm){
    if(form.valid){
    this.auth.login(this.model).subscribe(res=>{
      console.log(res);
      localStorage.setItem("token",res.data.token)
      this.auth.islogin=true
      this.router.navigateByUrl("")
    },(e=>{
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}
}
