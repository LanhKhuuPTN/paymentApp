import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDetailService } from '../shared/payment-detail.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public service: PaymentDetailService) {}
  invalidLogin: boolean;
  strErrors: string;
  ngOnInit(): void {}
  login(form: NgForm) {
    const crendentials = {
      username: form.value.username,
      password: form.value.password,
    };
    console.log(crendentials);
<<<<<<< HEAD
    this.service.LoginUser(crendentials).subscribe(
      (res) => {
        const token = (<any>res).token;
        localStorage.setItem('jwt', token);
        console.log(token);
        this.invalidLogin = false;
        this.router.navigate(['']);
      },
      (err) => {
        if (err.error.text != null) {
          this.strErrors = err.error.text;
        } else {
          this.invalidLogin = true;
        }
        // console.log(err.error.text);
        // this.invalidLogin = true;
=======
    this.service.LoginUser(crendentials).subscribe(res => {
      const token = (<any>res).token;
      localStorage.setItem('jwt',token);
      console.log(token);
      this.invalidLogin = false;
      this.router.navigate(["register"]);
    },err => {
      if(err.error.text!=null){
        this.strErrors=err.error.text;

      }
      else{
        this.invalidLogin = true;
>>>>>>> a2fe3689ffed20605428e1bc9a8063e55d2e2f69
      }
    );
  }
}
