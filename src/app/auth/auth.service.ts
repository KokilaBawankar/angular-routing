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

  constructor(private router: Router) { }

  register(username: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then(success => {
        this.isLoggedIn = true;
        this.router.navigate(['/admin', 'manage-movies']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(success => {
        this.isLoggedIn = true;
        this.router.navigate(['/admin', 'manage-movies']);
      })
      .catch(error => {
        console.log(error);
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


}
