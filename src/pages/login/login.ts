import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: any;

  constructor(public navCtrl: NavController) {}

  goToSignup() {
    this.navCtrl.push('RegisterPage');
  }
}
