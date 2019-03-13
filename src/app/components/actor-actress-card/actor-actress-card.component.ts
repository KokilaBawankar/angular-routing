import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actor-actress-card',
  templateUrl: './actor-actress-card.component.html',
  styleUrls: ['./actor-actress-card.component.css']
})
export class ActorActressCardComponent implements OnInit {

  @Input() actor;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goToActorActressDetails() {
    this.router.navigate([this.actor.id], {relativeTo: this.activatedRoute});
  }
}
