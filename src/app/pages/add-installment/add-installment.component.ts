import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-installment',
  templateUrl: './add-installment.component.html',
  styleUrls: ['./add-installment.component.css']
})
export class AddInstallmentComponent {
  constructor(private global:GlobalService){}

  errFlag=false
  errMsg=""

  model:any={
    customer:'',
    uint:'',
  }

  handellInstallment(form:any){
    if(form.valid){
      this.global.addInstallment(this.model).subscribe(res=>{
      console.log(res);
    },(e=>{
      console.log(e);
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}

}
