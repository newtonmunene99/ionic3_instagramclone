import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowingPage } from './following';

@NgModule({
  declarations: [
    FollowingPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowingPage),
  ],
})
export class FollowingPageModule {}
