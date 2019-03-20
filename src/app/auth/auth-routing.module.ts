import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent, data: {'fromRoute': 'login'}},
  {path: 'register', component: LoginComponent, data: {'fromRoute': 'register'}},
  {path: 'logout', component: LoginComponent, data: {'fromRoute': 'logout'}}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
