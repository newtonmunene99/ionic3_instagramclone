import { Component } from '@angular/core';
import { AlertController, LoadingController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {}

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Logged in!',
        subTitle: 'Thanks for logging in.',
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  goToSignup() {
    // this.navCtrl.push("SignupPage");
  }
}
