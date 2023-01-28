import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-uints-bought',
  templateUrl: './all-uints-bought.component.html',
  styleUrls: ['./all-uints-bought.component.css']
})
export class AllUintsBoughtComponent {
  uintsbought:any[]=[]
  constructor(private global:GlobalService){
    global.getAllUintsBought().subscribe(res=>{
      this.uintsbought=res.data
      console.log(this.uintsbought);

    })
  }

}
