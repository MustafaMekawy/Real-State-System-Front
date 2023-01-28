import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/interfaces/register';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
errFlag=false
errMSg=""
  constructor(private auth:AuthService){}
  model:Register={
    fName:  "",
    lName:"",
    email:  "",
    password:  "",
    passwordConfirmation:"",
    roleId:""

  }
  handleSubmit(registerform:NgForm){
    if(registerform.valid){
    this.auth.register(this.model).subscribe(res=>{
      console.log(res);
    },(e=>{
      this.errFlag=true
      this.errMSg=e.message
      console.log(e);
    }))
  }
}

}
