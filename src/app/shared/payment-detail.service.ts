import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) {}
  // readonly baseURl = "https://localhost:44320/api/PaymentDetails" ;
 // readonly baseURl = "https://localhost:44320/api/PaymentDetailGUIDs";
  readonly baseURl = "https://localhost:44395/api/Chelsea";
  readonly PhotoURL = "https://localhost:44395/Photos/";
  readonly Login =  "https://localhost:44395/api/Account/login";
  readonly Register = "https://localhost:44395/api/Account/register";
  readonly confirm   ="https://localhost:44395/api/Account/confirmemail";
  readonly forgot   ="https://localhost:44395/api/ForgotPassword/forgotPassword";
  readonly reset = "https://localhost:44395/api/ForgotPassword/resetpassword";

    formData: PaymentDetail = new PaymentDetail();
    data: PaymentDetail[] ;
    id: any;
    total: number;
    postPaymentDetail(){
      return this.http.post(this.baseURl,this.formData);
    }

    postPaymentDetail1(data: any){
      
      return this.http.post(this.baseURl,data);
    }
    LoginUser(data: any){
      return this.http.post(this.Login,data);
    }

    getallPaymentDetails(): Observable<any>{
      
      return this.http.get(this.baseURl)
    }

    putPaymentDetail(id: any, data: any){
      return this.http.put(`${this.baseURl}/${id}`,data);
    }
    
    getPaymentDetails(id: any){
      return this.http.get(`${this.baseURl}/${id}`);
    }

    deletePayment(id: number){
      return this.http.delete(`${this.baseURl}/${id}`);
     }

    refreshList() {
      this.getallPaymentDetails().subscribe((res)=>{
        this.data=res;
        this.total=res.length;
      });
    }

    register(data: any){
      return this.http.post(this.Register, data);
    }

    confirmEmail(data: any){
      return this.http.post(this.confirm, data);
    }

    listPaymentDetails(){
     return this.http.get(this.baseURl)
    // this.http.get(this.baseURl).
    // toPromise().then(res => this.list as PaymentDetail[])
    }

    forgotPassword(data: any){
    return this.http.post(this.forgot,data);    
    }
    
    resetpassword(data: any){
     return this.http.post(this.reset,data);
    }
     
    

    UploadPhoto(val: any) {
      return this.http.post(this.baseURl+"/SaveFile", val);
    }

    
    

    
}
