import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {from} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  fromRoute: string;
  constructor(public authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.fromRoute = data.fromRoute;
    });
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      if (params.get('fromRoute')) {
        this.fromRoute = 'login';
      }
    });
  }

  onRegister(username, password) {
    this.authService.register(username, password);
  }

  onLogin(username, password) {
    this.authService.login(username, password);
  }

  onClear() {
    this.username = '';
    this.password = '';
  }

  onLogout() {
    this.authService.logout();
  }
}
