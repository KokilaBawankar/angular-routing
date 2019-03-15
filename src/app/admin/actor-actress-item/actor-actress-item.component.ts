import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actor-actress-item',
  templateUrl: './actor-actress-item.component.html',
  styleUrls: ['./actor-actress-item.component.css']
})
export class ActorActressItemComponent implements OnInit {

  @Input() actorActress;

  constructor() { }

  ngOnInit() {
  }

}
