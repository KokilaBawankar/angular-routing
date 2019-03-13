import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actor-actress-card',
  templateUrl: './actor-actress-card.component.html',
  styleUrls: ['./actor-actress-card.component.css']
})
export class ActorActressCardComponent implements OnInit {

  @Input() actor;
  constructor() { }

  ngOnInit() {
  }

}
