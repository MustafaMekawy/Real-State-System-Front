import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-uints-avalible',
  templateUrl: './all-uints-avalible.component.html',
  styleUrls: ['./all-uints-avalible.component.css']
})
export class AllUintsAvalibleComponent {
  uintsAvalible:any[]=[]
  constructor(private global:GlobalService){
    global.getAllUintsAvalible().subscribe(res=>{
      this.uintsAvalible=res.data
      console.log(this.uintsAvalible);

    })
  }

}
