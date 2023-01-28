import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-uint',
  templateUrl: './single-uint.component.html',
  styleUrls: ['./single-uint.component.css']
})
export class SingleUintComponent {
  singleUint:any
  constructor(private global:GlobalService ,private activated:ActivatedRoute){
    const uintid=activated.snapshot.paramMap.get("id")
    global.getSingleUint(uintid).subscribe(res=>{
      this.singleUint=res.data
      console.log(this.singleUint);
    })
  }

}
