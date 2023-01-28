import { Component } from '@angular/core';
import { Uint } from 'src/app/interfaces/uint';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-uint',
  templateUrl: './create-uint.component.html',
  styleUrls: ['./create-uint.component.css']
})
export class CreateUintComponent {
  constructor(private global:GlobalService){}

  errFlag=false
  errMsg=""

  model:Uint={
    buildId:"",
    avalible:"",
    unitNumber:"",
    price:"",
    area:"",
    image:""
  }
  handelChange(eve:any){
    console.log(eve);
    this.model.image=eve.target.files[0]
  }
  handellAddUint(form:any){
    if(form.valid){
      let formData=new FormData()
      formData.append("buildId",this.model.buildId)
      // formData.append("avalible",this.model.avalible)
      formData.append("unitNumber",this.model.unitNumber)
      formData.append("price",this.model.price)
      formData.append("area",this.model.area)
      formData.append("image",this.model.image)

      this.global.addUint(formData).subscribe(res=>{
      console.log(res);
    },(e=>{
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}

}
