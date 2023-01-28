import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent {
  buildings:any[]=[]
  constructor(private global:GlobalService){
    global.getBuildings().subscribe(res=>{
      this.buildings=res.data
      console.log(this.buildings);
    })
  }

}
