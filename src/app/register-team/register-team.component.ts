import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css'],
})
export class RegisterTeamComponent implements OnInit {
  imageName: string;
  imagePath: any;
  constructor() {}

  ngOnInit(): void {}

  public registerForm = new FormGroup({
    teamName: new FormControl(''),
    dateCreated: new FormControl(''),
    imageName: new FormControl(''),
    imagePath: new FormControl(''),
    country: new FormControl(''),
  });

  onSubmit(): void {
    console.log('submitted');
    console.log(this.registerForm.value);
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
