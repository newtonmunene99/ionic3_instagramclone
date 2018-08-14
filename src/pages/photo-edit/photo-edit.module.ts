import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoEditPage } from './photo-edit';

@NgModule({
  declarations: [
    PhotoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoEditPage),
  ],
})
export class PhotoEditPageModule {}
