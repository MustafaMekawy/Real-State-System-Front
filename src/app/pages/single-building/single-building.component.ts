import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-building',
  templateUrl: './single-building.component.html',
  styleUrls: ['./single-building.component.css']
})
export class SingleBuildingComponent {
  singleBuild:any
  constructor(private global:GlobalService ,private activated:ActivatedRoute){
    const buildid=activated.snapshot.paramMap.get("id")
    global.getSingleBuild(buildid).subscribe(res=>{
      this.singleBuild=res.data
      console.log(this.singleBuild);
    })
  }

}
