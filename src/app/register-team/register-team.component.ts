import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ManageTeamService } from '../shared/manage-team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css'],
})
export class RegisterTeamComponent implements OnInit {
  imageName: string;
  imagePath: any;
  constructor(public serviceTeam: ManageTeamService) {}

  ngOnInit(): void {}

  public registerForm = new FormGroup({
    teamName: new FormControl(''),
    dateCreated: new FormControl(''),
    imageName: new FormControl(''),
    imagePath: new FormControl(''),
    country: new FormControl(''),
  });
  formData = new FormData();
  onSubmit(): void {
    var Data = {
      teamName: this.registerForm.value["teamName"],
      dateCreate: this.registerForm.value["dateCreated"],
      imageName: this.registerForm.value["imageName"],
      country: this.registerForm.value["country"],
    }
    // this.formData.append("teamName", this.registerForm.value["teamName"]);
    // this.formData.append("dateCreate", this.registerForm.value["dateCreated"]);
    // this.formData.append("imageName", "");
    // this.formData.append("country", this.registerForm.value["country"]);
    console.log('submitted');
    // console.log(this.formData);
    this.serviceTeam.CreateTeam(Data).subscribe(res=>{
      console.log("success");
    },err=>{
      console.log(err);
    })
  }
  
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.imagePath = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
