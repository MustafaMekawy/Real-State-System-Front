import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  constructor(private global:GlobalService){}

  errFlag=false
  errMsg=""

  model:Project={
    name:"",
    projectType:"",
    Areas:[],
    image:""
  }
  handelChange(eve:any){
    console.log(eve);
    this.model.image=eve.target.files[0]
  }
  handellAddUint(form:any){
    if(form.valid){
      let formData=new FormData()
      formData.append("name",this.model.name)
      formData.append("projectType",this.model.projectType)
      formData.append("Areas[0]", JSON.stringify(this.model.Areas))
      formData.append("image",this.model.image)

      this.global.addProject(formData).subscribe(res=>{
      console.log(res);
    },(e=>{
      this.errFlag=true
      this.errMsg=e.error.message
    }))
  }}

}
