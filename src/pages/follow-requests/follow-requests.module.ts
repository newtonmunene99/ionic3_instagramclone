import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowRequestsPage } from './follow-requests';

@NgModule({
  declarations: [
    FollowRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowRequestsPage),
  ],
})
export class FollowRequestsPageModule {}
