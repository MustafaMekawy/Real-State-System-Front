import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent {
  singleProject:any
  constructor(private global:GlobalService ,private activated:ActivatedRoute){
    const projectid=activated.snapshot.paramMap.get("id")
    global.getSingleProject(projectid).subscribe(res=>{
      this.singleProject=res.data
      console.log(this.singleProject);
    })
  }


}
