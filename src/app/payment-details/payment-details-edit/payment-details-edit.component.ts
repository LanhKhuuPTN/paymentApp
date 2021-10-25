import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-payment-details-edit',
  templateUrl: './payment-details-edit.component.html',
  styles: [
  ]
})
export class PaymentDetailsEditComponent  implements OnInit {

  constructor(public service: PaymentDetailService,
    private router: Router,
    private route: ActivatedRoute) { }
  
    editdata=new FormGroup(
     {
       playerName: new FormControl(''),
       position : new FormControl(''),
       nativeCountry : new FormControl(''),
       dateOfBirth : new FormControl(''),
       imageFile : new FormControl(''),
     }
   );
   id: any;
  List_position=["Striker","Goalkeeper","Right Back","Left Back","Centre Back","Central Defensive"
  ,"Attacking Midfielders","Midfielder"];
  List_player: any;
  choose_position: any;
  imageName: any;
  ngOnInit(){
      this.id= this.route.snapshot.paramMap.get('id');
      this.service.getPaymentDetails(this.id).subscribe((res:any) => {
    //  console.log(typeof(this.List_position[0]));
      this.List_player=res;
      this.imageName=res["imageName"];
      this.choose_position=res["position"];
      console.log(this.choose_position);
      console.log(res);
      this.editdata.patchValue(
        {
          playerName: res['playerName'],
          position : res['position'],
          nativeCountry : res['nativeCountry'],
          dateOfBirth : res['dateOfBirth'],
          id: res['id'],
          imageFile : "",
        });
      })
      console.log(this.editdata.value);
  }
  
  // onSubmit(form: NgForm ){
  //  console.log(form.value)
  //  console.log(this.service.id)
  //  this.updateRecord(form);
  // }
  
  UpdateData(){
  //  console.log(this.editdata.value);
   var Date = this.editdata.controls["dateOfBirth"].value;
   this.editdata.patchValue({
    dateOfBirth: moment(Date).format("YYYY-MM-DD")
   })
  //  this.service.formData.playerName=this.editdata.controls["playerName"].value;
  //  this.service.formData.nativeCountry=this.editdata.controls["nativeCountry"].value;
  //  this.service.formData.dateOfBirth=moment(Date).format("YYYY-MM-DD");
  //  this.service.formData.position=this.editdata.controls["position"].value;
  const formData = new FormData();
  if(this.editdata.controls['imageFile'].value == ""){
    formData.append("imageName", this.imageName);
    console.log("imageName")
  }
  else{
    formData.append("imageFile", this.editdata.controls['imageFile'].value);
    console.log(this.editdata.controls['imageFile'].value)
    // formData.append("imageName", " ");
  }
  formData.append("playerName",this.editdata.controls["playerName"].value);
  formData.append("position",this.editdata.controls["position"].value);
  formData.append("nativeCountry",this.editdata.controls["nativeCountry"].value);
  formData.append("dateOfBirth",this.editdata.controls["dateOfBirth"].value);

   this.service.putPaymentDetail(this.id, formData).subscribe(res =>{
      // console.log(res);
   },
   err=> console.log(err))
  }

  getFile(event: any){
    var file = event.target.files[0];
    // const formData:FormData =new FormData();
    // formData.append("uploadFile",file,file.name);
    this.editdata.patchValue({
      imageFile: file
    })
    this.editdata.get('imageFile')?.updateValueAndValidity()
    // this.service.UploadPhoto(formData).subscribe((data:any) => {
    // this.service.formData.imageName=data.toString();
    // console.log(this.service.formData.imageName);
    // })
    
}

}
