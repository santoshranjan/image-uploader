import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage, ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  ngOnInit(): void {
  }

  imageName = "WelcomeAngularImageUploadFile.jpg";
  imageChangedEvent: any = '';
  uploadImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  disable = false;
  isCancel = false;
  fileName:any = '';
  isFileSaved = false;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.fileName = event.target.files[0].name;
    this.uploadImage = '';
  }

  imageCropped(event: any) {
    this.uploadImage = event.base64;
  }

  previewImg() {
    this.disable = true;
  }

  cancelImage() {
    this.uploadImage = ''
  }

  imageLoaded() {
    this.showCropper = true;
  }

  fileSaveChanges() {
    this.isFileSaved = true;
  }
}
