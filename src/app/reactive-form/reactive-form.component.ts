import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {CityValidator} from '../cityvalidator';//This ts file is used for blanck spaces validation.
import { ApiService } from '../api.service'; // This service contail all rest api calls.
import { ActivatedRoute,ParamMap,Router } from '@angular/router';//Use queryParam for sending full username.

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

 formData:FormGroup;
 otpData:FormGroup;
 name:string;
 isSubmitted=false;
 isDisabled=true;//This variable used for enabling and disablind resendOtp button.
 isFooter=true;//I have used bootstrap card ,so at footer of card shows otp submition field after successful call of get otp api.
 isBottom=true;//This variable used to show or hide the error "Please try again after an hour"
 count:number=0; //It is used to count resend otp link click.

  constructor(private fbuild:FormBuilder,private $servic:ApiService,private $thnx:Router,private $arot:ActivatedRoute) {
 
    this.formData=this.fbuild.group({
      panNumber:new FormControl('',Validators.compose([Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}"),Validators.maxLength(10)])),
      city:['',Validators.compose([Validators.required,CityValidator.cannotContainSpace,Validators.pattern("^[A-Za-z]+$")])],
      fullname:['',Validators.compose([Validators.required,Validators.maxLength(140)])],
      email:['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
          ])],
      mobile:['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])],
      
    });

     this.otpData=this.fbuild.group({
      mobile:['',Validators.compose([Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10),Validators.minLength(10)])],
       otp:['',Validators.compose([Validators.required,Validators.maxLength(4),Validators.pattern("^[0-9]+$")])],
      
     })

    
   }

  ngOnInit(): void {
    // this.callApi();
   
  }
  
     setEnable(){
       this.isDisabled=false;
     }
   /*  callApi(){
       this.$servic.getApiResponse().subscribe((resp)=>{
         console.log(resp);
       },(err)=>{console.log(err);})
     }*/
   
    addData(formData:any){
      this.isSubmitted=true;
      this.isDisabled=true;
      console.log(formData.valid);
      console.log(this.formData.controls['fullname'].value);
      this.name=this.formData.controls['fullname'].value;
     if(formData.valid){
      this.$servic.getApiResponse(formData.value).subscribe((resp)=>{
        console.log(resp.status);
        if(resp.status=="Success"){
         this.isFooter=false;
         setTimeout(() =>{
          this.isDisabled=false;
     },180000); //setTimeout function count time in millisecond, 1000ms = 1sec so 180000ms=3min
        }
      },(err)=>{console.log(err);})
    }
     // console.log(formData);
     }    
    
     otpResp(otpData:any){
        
      this.$servic.getVerifyOtp(otpData).subscribe((res)=>{
        console.log("Otp Response :",res.status);
       if(res.status=="Success"){
          this.$thnx.navigate(['/thanxuser'], { queryParams: { name:this.name } });
        }
      },(err)=>{console.log(err);})
     }


    getResend(formData:any){ //This function used by resendotp button.
      this.isSubmitted=true;
      this.isDisabled=true;
      this.count++;
      this.$servic.getApiResponse(formData).subscribe((resp)=>{
        console.log(resp.status);
        if(resp.status=="Success"){
        // this.isFooter=false;
         setTimeout(() =>{
          this.isDisabled=false;
     },180000);
        }
      },(err)=>{console.log(err);})
      console.log(formData);
    
      if(this.count>3){
        this.isFooter=true;
        this.isBottom=false;
      }
     
    }
}
