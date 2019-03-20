import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {from} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  fromRoute: string;
  errorMsg: string;
  @ViewChild('form') form: NgForm;
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
    this.authService.register(username, password)
      .catch(errorMsg => this.errorMsg = errorMsg );
  }

  onLogin(username, password) {
    this.authService.login(username, password)
      .catch(errorMsg => this.errorMsg = errorMsg );
  }

  onClear() {
    this.form.control.get('username').setValue('');
    this.form.control.get('password').setValue('');
  }

  onLogout() {
    this.authService.logout();
  }
}
