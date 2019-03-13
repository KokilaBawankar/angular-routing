import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActorActressService} from '../../providers/actor-actress.service';

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
    console.log(this.activatedRoute.snapshot.outlet);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.actorActressService.getActorActressById(+this.id)
      .subscribe(actor => this.actor = actor);
  }

}
