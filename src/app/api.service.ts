import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 public userMobile:any;
  constructor(private $rout:HttpClient) { }

  getApiResponse(obj:any):Observable<any>{
    this.userMobile=obj.mobile;
    
    return this.$rout.post("http://lab.thinkoverit.com/api/getOTP.php",obj);
  }

   getVerifyOtp(Otp:any):Observable<any>{
     
     return this.$rout.post("http://lab.thinkoverit.com/api/verifyOTP.php",Otp);
   }
   
   
}
