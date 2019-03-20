import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7dR1znVa4kkTP3YwebH02-SY9i0xZuUQ',
      authDomain: 'practice-angular-2707b.firebaseapp.com'
    });
    setTimeout(() => {
      this.authService.isAuthenticated();
    }, 2000);
  }
}
