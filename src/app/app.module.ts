import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TruncateEllipsisPipe } from './pipe/TruncateEllipsisPipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    TruncateEllipsisPipe
  ],
  imports: [
    BrowserModule,
    ImageCropperModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
