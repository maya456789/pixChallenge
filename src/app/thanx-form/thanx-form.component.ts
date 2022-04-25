import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-thanx-form',
  templateUrl: './thanx-form.component.html',
  styleUrls: ['./thanx-form.component.css']
})
export class ThanxFormComponent implements OnInit {
  
  public userDetails:any;
  nmae:string;
  sub:any; 
  constructor(private arout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
       this.sub=this.arout.queryParams.subscribe(params=>{
       
       this.nmae=params['name'] ;
  
     })

     const storage=localStorage.getItem("google_auth");

     if(storage){
       this.userDetails=JSON.parse(storage);
     }else{
       this.signOut();
     }
    
  }

  signOut():void{
    localStorage.removeItem('google_auth');
    this.router.navigate(['/login']);
  }

}
