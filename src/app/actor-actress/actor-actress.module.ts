import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActorsComponent} from './actors/actors.component';
import {ActorActressCardComponent} from './actor-actress-card/actor-actress-card.component';
import {ActorActressDetailsComponent} from './actor-actress-details/actor-actress-details.component';
import {ActorActressRoutingModule} from './actor-actress-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActorActressRoutingModule
  ],
  declarations: [
    ActorsComponent,
    ActorActressCardComponent,
    ActorActressDetailsComponent
  ]
})
export class ActorActressModule { }
