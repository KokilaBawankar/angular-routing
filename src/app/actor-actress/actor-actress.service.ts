import { Injectable } from '@angular/core';
import {ACTOR_ACTRESS} from './mock-actors-actress';
import {BehaviorSubject, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorActressService {

  actorActresses;
  actorActressesBehaviorSubject: BehaviorSubject<any>;
  url = 'https://practice-angular-2707b.firebaseio.com/actor-actress.json';

  constructor(private httpClient: HttpClient) {
    // this.actorActresses = ACTOR_ACTRESS;
    this.actorActressesBehaviorSubject = new BehaviorSubject(this.actorActresses);
  }

  fetchActorActress() {
    this.httpClient.get(this.url)
      .subscribe(actorActresses => {
        this.actorActresses = actorActresses;
        this.actorActressesBehaviorSubject.next(actorActresses);
      });
  }

  // getActorActress() {
  //   return of(this.actorActresses);
  // }

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
    this.httpClient.put(this.url, this.actorActresses)
      .subscribe(data => console.log(data));
  }
}
