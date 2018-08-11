import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  fakeimages: Array<any> = new Array(20);
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  gotoSearch() {
    this.navCtrl.push('SearchPage');
  }
  gotoExploreList() {
    this.navCtrl.push('ExploreListPage');
  }
}
