import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.css']
})
export class MyPaymentsComponent {
  myPayment:any[]=[]
  rests:any[]=[]
  constructor(private global:GlobalService){
    global.getMyPayments().subscribe(res=>{
      this.myPayment=res.data
      this.rests=res.data.restofthepayments
      console.log(this.rests);
      console.log(this.myPayment);

    })
  }

}
