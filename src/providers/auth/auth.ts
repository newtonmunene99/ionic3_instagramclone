import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor(public http: HttpClient) {}

  searchUser(id) {
    return new Observable(observer => {
      this.http.get('http://localhost:8080/user/search/' + id).subscribe(
        res => {
          observer.next(res);
          console.log(res);
        },
        err => {
          observer.error(err);
          console.error(err);
        }
      );
    });
  }
  createUser(username, name, password, email, phone) {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:8080/user/register', {
          username: username,
          name: name,
          _id: username,
          password: password,
          email: email,
          phone: phone
        })
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
            console.error(err);
          }
        );
    });
  }
  login(username, password) {
    return new Promise((resolve, reject) => {
      this.http
        .post('http://localhost:8080/user/login', {
          id: username,

          password: password
        })
        .subscribe(
          (res: any) => {
            if (res.status == 'success') {
              resolve(res);
            } else {
              reject(res);
            }
          },
          err => {
            reject(err);
            console.error(err);
          }
        );
    });
  }
}
