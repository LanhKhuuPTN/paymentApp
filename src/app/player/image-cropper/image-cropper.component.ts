import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage,base64ToFile } from 'ngx-image-cropper';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EditPlayerComponent } from '../edit-player/edit-player.component';




@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private editmodel: EditPlayerComponent
    ) { }
  

    
  ngOnInit(): void {

  }
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imagefile: any = '';
  nameImage: any = '';
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      this.nameImage = event.target.files[0].name;
      // this.editmodel.formData.append("imageName",this.nameImage);

  }
  imageCropped(event: ImageCroppedEvent) {
      // console.log(event.offsetImagePosition);
      this.croppedImage = event.base64;
      this.editmodel.imagePath= this.croppedImage;
      let File = base64ToFile(this.croppedImage);
      
      this.editmodel.formData.append("imageFile", File, this.nameImage);
      // console.log(File);
  }
  imageLoaded() {
      // show cropper
      
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
