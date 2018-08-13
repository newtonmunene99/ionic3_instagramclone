import { Component } from '@angular/core';
import {
  AlertController,
  LoadingController,
  IonicPage,
  NavController
} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;

  username: any;
  password: any;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public authService: AuthProvider
  ) { }

  login() {
    this.authService
      .login(this.username, this.password)
      .then(res => {
        console.log(res);
        const alert = this.alertCtrl.create({
          title: 'Logged in!',
          subTitle: 'Thanks for logging in.',
          buttons: ['Dismiss']
        });
        alert.present();
      })
      .catch(err => {
        console.error(err);
      });
  }

  goToSignup() {
    this.navCtrl.push('RegisterPage');
  }
}
