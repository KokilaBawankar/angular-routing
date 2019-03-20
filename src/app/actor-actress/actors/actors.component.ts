import { Component, OnInit } from '@angular/core';
import {ActorActressService} from '../actor-actress.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actorActress;
  constructor(private actorActressService: ActorActressService) { }

  ngOnInit() {
    this.actorActressService.actorActressesBehaviorSubject
      .subscribe(actors => {this.actorActress = actors; });
  }

}
