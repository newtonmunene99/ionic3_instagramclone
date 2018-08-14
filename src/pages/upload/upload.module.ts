import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPage } from './upload';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    UploadPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadPage), SuperTabsModule
  ],
})
export class UploadPageModule {}
