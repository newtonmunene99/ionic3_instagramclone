import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild(Slides)
  slides: Slides;
  registerMode: any = 'phone';
  email: any;
  phone: any;
  username: any;
  fullname: any;
  password: any;
  idok: Boolean;
  next: Boolean;
  finish: Boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goToLogin() {
    this.navCtrl.push('LoginPage');
  }

  validatePhone() {
    this.next = true;
    setTimeout(() => {
      this.slides.slideNext();
    }, 1000);
  }
  validateEmail() {
    this.next = true;
    setTimeout(() => {
      this.slides.slideNext();
    }, 1000);
  }

  checkID() {
    this.authService.searchUser(this.username).subscribe(
      (res: any) => {
        console.log(res.data.docs.length);
        if (res.data.docs.length == 0) {
          this.idok = true;
          console.log('username available');
        } else {
          console.log('Username Taken');
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  finalise() {
    this.finish = true;
    setTimeout(() => {
      this.slides.slideNext();
    }, 1000);
  }

  register() {
    this.authService
      .createUser(
        this.username,
        this.fullname,
        this.password,
        this.email,
        this.phone
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
