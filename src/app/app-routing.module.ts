import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ActorsComponent} from './actor-actress/actors/actors.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActorActressDetailsComponent} from './actor-actress/actor-actress-details/actor-actress-details.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
