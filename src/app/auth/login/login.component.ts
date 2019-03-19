import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Username';
  password = 'Password';
  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login()
      .subscribe(() => {
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin/manage-movies';
        this.router.navigate([redirectUrl]);
      });
  }

  onClear() {
    this.username = '';
    this.password = '';
  }

  onLogout() {
    this.authService.logout();
  }
}
