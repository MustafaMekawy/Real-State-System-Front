import { Component } from '@angular/core';
import { Build } from 'src/app/interfaces/build';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-build',
  templateUrl: './create-build.component.html',
  styleUrls: ['./create-build.component.css']
})
export class CreateBuildComponent {
  constructor(private global:GlobalService){}

  errFlag=false
  errMsg=""

  model:Build={
  projectId:"",
  area:"",
  buildNum:"",
  numoffloors:"",
  image:""
  }
  handelChange(eve:any){
    console.log(eve);
    this.model.image=eve.target.files[0]
  }
  handellAddproject(form:any){
    if(form.valid){
      let formData=new FormData()
      formData.append("projectId",this.model.projectId)
      formData.append("area",this.model.area)
      formData.append("buildNum",this.model.buildNum)
      formData.append("numoffloors",this.model.numoffloors)
      formData.append("image",this.model.image)

      this.global.addBuild(formData).subscribe(res=>{
      console.log(res);
    },(e=>{
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}


}
