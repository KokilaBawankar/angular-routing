import { Component, OnInit } from '@angular/core';
import {ActorActressService} from '../../providers/actor-actress.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actorActress;
  constructor(private actorActressService: ActorActressService) { }

  ngOnInit() {
    this.actorActressService.getActorActress()
      .subscribe(actors => {this.actorActress = actors; });
  }

}
