import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoUploadPage } from './photo-upload';

@NgModule({
  declarations: [
    PhotoUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoUploadPage),
  ],
})
export class PhotoUploadPageModule {}
