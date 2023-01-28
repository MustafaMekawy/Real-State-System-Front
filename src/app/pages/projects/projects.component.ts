import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:any[]=[]
  constructor(private global:GlobalService){
   global.getProjects().subscribe(res=>{
    this.projects=res.data
    console.log(this.projects);
   })
  }

}
