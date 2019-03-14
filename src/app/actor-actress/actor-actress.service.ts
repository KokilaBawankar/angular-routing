import { Injectable } from '@angular/core';
import {ACTOR_ACTRESS} from './mock-actors-actress';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorActressService {

  actorActress;
  constructor() {
    this.actorActress = ACTOR_ACTRESS;
  }
  getActorActress() {
    return of(this.actorActress);
  }
  getActorActressById(id: number) {
    return of(this.actorActress.find(actor => actor.id === id));
  }
}
