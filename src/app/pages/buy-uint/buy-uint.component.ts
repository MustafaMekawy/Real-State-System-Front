import { Component } from '@angular/core';
import { BuyUint } from 'src/app/interfaces/buy-uint';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-buy-uint',
  templateUrl: './buy-uint.component.html',
  styleUrls: ['./buy-uint.component.css']
})
export class BuyUintComponent {
  constructor(private global:GlobalService){}

  errFlag=false
  errMsg=""

  model:BuyUint={
    uint:'',
    customer:'',
    payment:''
  }

  handellBuyUint(form:any){
    if(form.valid){
      this.global.buyUint(this.model).subscribe(res=>{
      console.log(res);
    },(e=>{
      console.log(e);
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}

}
