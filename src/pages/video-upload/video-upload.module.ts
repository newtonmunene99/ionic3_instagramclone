import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoUploadPage } from './video-upload';

@NgModule({
  declarations: [
    VideoUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoUploadPage),
  ],
})
export class VideoUploadPageModule {}
