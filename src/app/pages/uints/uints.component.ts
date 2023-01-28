import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-uints',
  templateUrl: './uints.component.html',
  styleUrls: ['./uints.component.css']
})
export class UintsComponent {
  uints:any[]=[]
  constructor(private global:GlobalService){
    global.getUints().subscribe(res=>{
      this.uints=res.data
      console.log(this.uints);
    })
  }

}
