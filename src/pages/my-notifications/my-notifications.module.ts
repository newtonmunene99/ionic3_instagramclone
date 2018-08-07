import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyNotificationsPage } from './my-notifications';

@NgModule({
  declarations: [
    MyNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyNotificationsPage),
  ],
})
export class MyNotificationsPageModule {}
