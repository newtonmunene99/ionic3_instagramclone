import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyNotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-notifications',
  templateUrl: 'my-notifications.html'
})
export class MyNotificationsPage {
  rootNavCtrl: NavController;
  fakenotifications: Array<any> = new Array(20);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyNotificationsPage');
  }

  goToRequests(localNavCtrl: boolean = false) {
    if (localNavCtrl) {
      this.navCtrl.push('FollowRequestsPage');
    } else {
      this.rootNavCtrl.push('FollowRequestsPage');
    }
  
  }
}
