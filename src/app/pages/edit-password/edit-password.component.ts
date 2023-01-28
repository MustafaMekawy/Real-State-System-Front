import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  constructor(private auth:AuthService){}
  errFlag=false
  errMsg=""
  model={
    password:"",
    newPassword:""
  }
  handellchange(form:any){
    if(form.valid){
    this.auth.editpassword(this.model).subscribe(res=>{
      console.log(res);
    },(e=>{
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}

}
