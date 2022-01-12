import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-thanx-form',
  templateUrl: './thanx-form.component.html',
  styleUrls: ['./thanx-form.component.css']
})
export class ThanxFormComponent implements OnInit {
  
  nmae:string;
   sub:any; 
  constructor(private arout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
       this.sub=this.arout.queryParams.subscribe(params=>{
       
       this.nmae=params['name'] ;
  
     })
    
  }

}
