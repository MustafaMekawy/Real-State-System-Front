import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-uints',
  templateUrl: './my-uints.component.html',
  styleUrls: ['./my-uints.component.css']
})
export class MyUintsComponent {
  myUints:any[]=[]
  constructor(private global:GlobalService){
    global.getMyUints().subscribe(res=>{
      this.myUints=res.data
      console.log(this.myUints);

    })
  }

}
