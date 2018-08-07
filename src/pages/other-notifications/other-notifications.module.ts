import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherNotificationsPage } from './other-notifications';

@NgModule({
  declarations: [
    OtherNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(OtherNotificationsPage),
  ],
})
export class OtherNotificationsPageModule {}
