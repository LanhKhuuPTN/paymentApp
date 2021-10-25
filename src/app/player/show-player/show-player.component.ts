import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {

  constructor(public service: PaymentDetailService) { }
  //ModalTitle: string = 'Show Player'
  ngOnInit(): void {
    this.service.refreshList();
  }

  ModalTitle: string ;

  ActivateAddEditPlayer: boolean = false;
  player: any ;
  p: number=1;

  addClick(){
    this.player = {
      playerName: "",
      position: "",
      nativeCountry: "",
      dataOfBirth: "",
      imageName: "anonymous.jpg",
    }
    this.ModalTitle = "Add Player";
    this.ActivateAddEditPlayer=true;
  }
  
  deleteClick(item: any){
    if(confirm('Are you Sure?')){
      this.service.deletePayment(item.id).subscribe(res =>{
        alert("Success!!");
        this.service.refreshList();
      })
    }
  }

  editClick(data: any){
      this.player=data;
      this.ModalTitle = "Edit Player";
      this.ActivateAddEditPlayer=true;
  }

  closeClick(){
    this.ActivateAddEditPlayer=false;
    this.service.refreshList();
  }

  
  PlayernameFilter:string="";
  FilterFn(){
    if(this.PlayernameFilter==""){
      this.ngOnInit();
    }else{
    this.service.data=this.service.data.filter(res=>{
      return res.playerName.toLocaleLowerCase().match(this.PlayernameFilter.toLocaleLowerCase());
    })
    }
    
  }
}
