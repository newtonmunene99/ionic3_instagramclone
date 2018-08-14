import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryUploadPage } from './gallery-upload';
//import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [GalleryUploadPage],
  imports: [
    IonicPageModule.forChild(GalleryUploadPage) //AngularCropperjsModule
  ]
})
export class GalleryUploadPageModule {}
