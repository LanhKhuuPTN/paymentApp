import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import * as _moment from 'moment';
import { ThrowStmt } from '@angular/compiler';
const moment = _moment; 
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private fb: FormBuilder,
    ) { }

  ImageData: any ;
  ngOnInit(){
   
  }

  // onSubmit(form: NgForm ){
  //    this.insertRecord(form);
  // }


  // insertRecord(form: NgForm){
  //   this.service.postPaymentDetail().subscribe(data => {
  //     this.resetForm(form);
  //     this.service.refreshList();
  //   },
  //   err => {console.log(err)});
  // }
Data: any;

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetail();
  }

  StringNameImage: any;
  editdata =this.fb.group({
    "playerName": ["",[Validators.required]],
    "position": ["",[Validators.required]],
    "dateOfBirth": ["",[Validators.required]],
    "nativeCountry": ["",[Validators.required]],
    "imageFile": [null],
  });

  get f(){
    return this.editdata.controls;
  }

  fileNameImage: string ;
  
  onSubmit1(){
    // var data =  this.editdata.controls["expirationDate"].value;
    var Date = this.editdata.controls["dateOfBirth"].value;
    this.editdata.patchValue({
      dateOfBirth: moment(Date).format("YYYY-MM-DD")
     })
    const formData = new FormData();
    formData.append("playerName",this.editdata.controls["playerName"].value);
    formData.append("position",this.editdata.controls["position"].value);
    formData.append("nativeCountry",this.editdata.controls["nativeCountry"].value);
    formData.append("dateOfBirth",this.editdata.controls["dateOfBirth"].value);
    formData.append("imageFile", this.editdata.controls['imageFile'].value);
       this.service.postPaymentDetail1(formData).subscribe(res=>{
         console.log(this.editdata.value);
         console.log("success!");
        //  this.editdata.patchValue({
        //   "playerName": [""],
        //   "position": [""],
        //   "dateOfBirth": [""],
        //   "nativeCountry": [""],
        //   "imageFile": [null],
        //  })
      },
        err => console.log(err));
      this.service.refreshList();
  }
  getFile(event: any){
      const file = event.target.files[0];
      this.editdata.patchValue({
        imageFile: file
      })
      this.editdata.get('imageFile')?.updateValueAndValidity()
      
  }


}

