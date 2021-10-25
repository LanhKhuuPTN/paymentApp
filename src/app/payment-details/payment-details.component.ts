import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import {PaymentDetail } from '../shared/payment-detail.model';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
  

  
  constructor(public service: PaymentDetailService) { }

  CardName : any 
  p: number=1;
  total= this.service.total;  
  player: any;
  playerName: any;
  ngOnInit(){
    this.service.refreshList();    
  }
 
  // ngOnInit(): void {
  //   // this.total = this.service.data.length;
  //   console.log("");
  //   this.service.refreshList();
    
  // }

 
  onDelete(id: number){
    if(confirm("Are you sure?"))
    this.service.deletePayment(id).subscribe((res)=>{
      this.service.refreshList();
    })
  }


  Search(){
    if(this.playerName==""){
      this.ngOnInit();
    }else{
      this.service.data=this.service.data.filter(res=>{
        return res.playerName.toLocaleLowerCase().match(this.playerName.toLocaleLowerCase());
      })
    }
  }

  reverse:boolean = false;
  

  
  Sort(){
      this.reverse= !this.reverse;
      let direction= this.reverse ? 1: -1
      this.service.data=this.service.data.sort( (a,b)=>{
       if (a.playerName>b.playerName){
         return -1*direction;
       }
       else if(a.playerName<b.playerName){
         return 1*direction;
       }
       else{
         return 0;
       }
    });
    
  }

  

  isUserAuthenticated(){
    const token= localStorage.getItem("jwt");
    if(token){
      return token;
    }
    else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
  }

}
