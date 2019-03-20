import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies/movies.service';
import {ActorActressService} from '../actor-actress/actor-actress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies;
  actorActresses;
  constructor(private moviesService: MoviesService,
              private actorActressService: ActorActressService) { }

  ngOnInit() {
    this.moviesService.moviesBehaviorSubject
      .subscribe(movies => {
        if (movies) {
          this.movies = movies.slice(2, 7);
        }
      });
    this.actorActressService.actorActressesBehaviorSubject
      .subscribe(actorActresses => {
        if (actorActresses) {
          this.actorActresses = actorActresses.slice(2, 7);
        }
      });

    this.moviesService.getMovies().subscribe(movies => this.movies = movies.slice(2, 7));
    this.actorActressService.getActorActress().subscribe(actorActresses => this.actorActresses = actorActresses.slice(2, 7));
  }

}
