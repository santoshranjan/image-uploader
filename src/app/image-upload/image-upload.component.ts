import { Component, OnInit } from '@angular/core';
import { ImageTransform } from 'ngx-image-cropper';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  ngOnInit(): void {
  }

  galleryList: any = [];
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
  fileName: any = '';
  isFileSaved = false;
  preEllipseName = '';
  postEllipseName = '';


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.fileName = event.target.files[0].name;
    this.ellipseImageName(this.fileName);
    console.log(this.imageChangedEvent);
  }

  ellipseImageName(filename: any) {
    this.preEllipseName = filename.slice(0, -7);
    this.postEllipseName = filename.substr(filename.length - 7, filename.length);
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
    this.galleryList.push({
      uploadedImage: this.uploadImage,
      preEllipseName: this.preEllipseName,
      postEllipseName: this.postEllipseName
    });
    console.log(this.galleryList);
  }
}
