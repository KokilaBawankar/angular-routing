import {Component, OnInit} from '@angular/core';
import {MoviesService} from './movies/movies.service';
import {ActorActressService} from './actor-actress/actor-actress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private moviesService: MoviesService,
              private actorActressService: ActorActressService) {}

  ngOnInit(): void {
    this.moviesService.fetchMovies();
    this.actorActressService.fetchActorActress();
  }
}
