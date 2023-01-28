import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth:AuthService){
    if(localStorage.getItem('token')) auth.islogin=true
  }


  hanelLogOut(){
    localStorage.removeItem("token")
    this.auth.islogin=false
  }

}
