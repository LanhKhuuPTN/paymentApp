import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    public service: PaymentDetailService,
    ) { }

  ngOnInit(): void {
    
  }
  dataform: any = {};
  invalidForm: boolean = false;
  message: string ;
  reset(form: NgForm){
    if(form.value.password != form.value.passwordconfirm){
      this.invalidForm= true;
    } 
    else{
      this.dataform.password = form.value.password
    this.dataform.token = this.route.snapshot.queryParamMap.get('token');
    this.dataform.email = this.route.snapshot.queryParamMap.get('email');
    //console.log(invalidForm);
    console.log(this.dataform);
    this.service.resetpassword(this.dataform).subscribe(res=>{
      console.log(res);
    },err=>{
      this.message = err.error.text;
      console.log(err.error.text);
    })
    } 
    

  }
}
