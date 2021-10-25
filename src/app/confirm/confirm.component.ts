import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { relativeTimeThreshold } from 'moment';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router, 
    public service: PaymentDetailService,
    private route: ActivatedRoute,
    ) { }
  emailConfirmed: boolean = false;
  urlParams: any = {};
  ngOnInit(): void {
  
    this.urlParams.token= this.route.snapshot.queryParamMap.get('token');
    this.urlParams.userid = this.route.snapshot.queryParamMap.get('userid');
    this.confirm();
  }
  confirm(){
    console.log(this.urlParams);
    this.service.confirmEmail(this.urlParams).subscribe(res=>{
      console.log("success")
      this.emailConfirmed=true;
    },err=>{
      console.log("failed");
      this.emailConfirmed=false;
    })

  }
  
  
}
