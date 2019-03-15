import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ActorActressService} from '../actor-actress.service';

@Component({
  selector: 'app-actor-actress-details',
  templateUrl: './actor-actress-details.component.html',
  styleUrls: ['./actor-actress-details.component.css']
})
export class ActorActressDetailsComponent implements OnInit {

  id;
  actor;
  constructor(private activatedRoute: ActivatedRoute,
              private actorActressService: ActorActressService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.id = params.params['id'];
        this.actorActressService.getActorActressById(+this.id)
          .subscribe(actor => this.actor = actor);
        window.scroll(0, 0);
      });
  }

}
