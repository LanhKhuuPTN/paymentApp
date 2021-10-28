import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ManageTeamService } from '../shared/manage-team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css'],
})
export class RegisterTeamComponent implements OnInit {
  imageName: string;
  imagePath: any;
  uploadForm: FormGroup;
  constructor(
    public serviceTeam: ManageTeamService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      dateCreate: ['', Validators.required],
      imageName: [''],
      imageFile: [''],
      country: ['', Validators.required],
    });
  }

  // public registerForm = new FormGroup({
  //   teamName: new FormControl('', Validators.required),
  //   dateCreated: new FormControl('', Validators.required),
  //   imageName: new FormControl(''),
  //   imageFile: new FormControl(''),
  //   country: new FormControl('', Validators.required),
  // });
  // formData = new FormData();
  onSubmit(): void {
    // var Data = {
    //   teamName: this.registerForm.value['teamName'],
    //   dateCreate: this.registerForm.value['dateCreated'],
    //   imageName: '',
    //   country: this.registerForm.value['country'],
    // };
    const formData = new FormData();
    formData.append('teamName', this.uploadForm.get('teamName')!.value);
    formData.append('dateCreate', this.uploadForm.get('dateCreate')!.value);
    formData.append('imageName', '');
    formData.append('imageFile', this.uploadForm.get('imageFile')!.value);
    formData.append('country', this.uploadForm.get('country')!.value);
    console.log('submitted');
    console.log(formData);
    this.serviceTeam.CreateTeam(formData).subscribe(
      (res) => {
        console.log('success');
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.imagePath = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
      var file = event.target.files[0];
      this.uploadForm.get('imageFile')?.setValue(file);
    }
  }
}
