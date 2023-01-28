import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myprofile:any
  constructor(private global:GlobalService){
    global.getProfile().subscribe(res=>{
      this.myprofile=res.data.user
      console.log(this.myprofile);
    })

  }

}
