import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorsComponent} from './actors/actors.component';
import {ActorActressDetailsComponent} from './actor-actress-details/actor-actress-details.component';
import {CanActivateGuard} from '../guards/can-activate.guard';

const actorActressRoutes: Routes = [
  { path: '',
    component: ActorsComponent,
    children: [
      {path: ':id', component: ActorActressDetailsComponent}
    ],
    canActivate: [CanActivateGuard]},
]

@NgModule({
  imports: [
    RouterModule.forChild(actorActressRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ActorActressRoutingModule { }
