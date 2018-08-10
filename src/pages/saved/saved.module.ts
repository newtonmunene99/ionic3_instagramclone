import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedPage } from './saved';

@NgModule({
  declarations: [
    SavedPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedPage),
  ],
})
export class SavedPageModule {}
