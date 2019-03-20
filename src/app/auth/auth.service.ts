import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  token: string;
  constructor(private router: Router) { }

  register(username: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(success => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
            .catch(error => console.log(error));
          this.isLoggedIn = true;
          this.router.navigate(['/admin', 'manage-movies']);
        })
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            return reject('Email is already registered.');
          } else {
            return reject('Something went wrong.');
          }
        });
    });
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(username, password)
        .then(success => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
            .catch(error => console.log(error));
          this.isLoggedIn = true;
          this.router.navigate(['/admin', 'manage-movies']);
          return resolve();
        })
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/wrong-password') {
            return reject('Password is wrong.');
          }
          if (error.code === 'auth/user-not-found') {
            return reject('User not found.');
          } else {
            return reject('Something went wrong.');
          }
        });
    });
  }

  logout(): void {
    firebase.auth().signOut()
      .then(success => {
        this.isLoggedIn = false;
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token)
      .catch(error => console.log(error));
    return this.token;
  }
}
