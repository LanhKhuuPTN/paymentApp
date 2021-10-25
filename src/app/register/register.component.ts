import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public service: PaymentDetailService) { }

  ngOnInit(): void {
  }
  invalidPassword : boolean = false;
  invalidForm: boolean = false;
  error: string ;
  register(form: NgForm): void {
    const formdata = {
      'username': form.value.username,
       'email': form.value.email,
       'password': form.value.password,
    }
    if(form.value.password != form.value.password_confirmation) {
      this.invalidPassword = true;
    }
//    console.log(formdata);
      console.log(form.value.password , form.value.password_confirmation)
    this.service.register(formdata).subscribe(res => {
       console.log(res);
       this.invalidForm=false;
       this.router.navigate(["login"]);
    },err=>{
      this.invalidForm=true;
      console.log(err.error.text);
      this.error=err.error.text;
    }
    );
  }

}
