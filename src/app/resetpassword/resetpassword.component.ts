import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }
  errMessage: string;
  invalidEmail: boolean = false;
  ngOnInit(): void {
  }
  
  reset(form: NgForm){

    const emailForm ={
      'email': form.value.email,
    }
    this.service.forgotPassword(emailForm).subscribe(res => {
      //console.log(res)
    },err=>{
      this.invalidEmail= true;
      this.errMessage=err.error.text;
      console.log(this.errMessage);
    })

  }

}
