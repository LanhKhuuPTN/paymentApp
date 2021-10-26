import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    teamName: new FormControl('', Validators.required),
    dateCreated: new FormControl('', Validators.required),
    imageName: new FormControl(''),
    imagePath: new FormControl(''),
    country: new FormControl('', Validators.required),
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
