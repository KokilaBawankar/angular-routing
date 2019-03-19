import { Injectable } from '@angular/core';
import {ACTOR_ACTRESS} from './mock-actors-actress';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorActressService {

  actorActresses;
  constructor() {
    this.actorActresses = ACTOR_ACTRESS;
  }
  getActorActress() {
    return of(this.actorActresses);
  }
  getActorActressById(id: number) {
    return of(this.actorActresses.find(actor => actor.id === id));
  }

  editMovie(actorActress) {
    this.actorActresses.filter((item, index) => {
      if (item.id === actorActress.id) {
        this.actorActresses[index] = actorActress;
        return;
      }
    });
  }
}
