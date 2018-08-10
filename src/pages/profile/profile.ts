import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  photos_state: any = 'grid';
  fakeimages: Array<any> = new Array(20);
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  gotoSaved() {
    let currentSegment = this.photos_state;
    this.navCtrl.push('SavedPage').then(() => {
      this.photos_state = currentSegment;
    });
  }
}
