import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [NotificationsPage],
  imports: [IonicPageModule.forChild(NotificationsPage), SuperTabsModule]
})
export class NotificationsPageModule {}
