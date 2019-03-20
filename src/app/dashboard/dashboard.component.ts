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
  actorActress;
  constructor(private moviesServie: MoviesService,
              private actorActressService: ActorActressService) { }

  ngOnInit() {
    this.moviesServie.moviesBehaviorSubject
      .subscribe(movies => {
        if (movies) {
          this.movies = movies.slice(2, 7);
        }
      });
    this.actorActressService.actorActressesBehaviorSubject
      .subscribe(actorActress => {
        if (actorActress) {
          this.actorActress = actorActress.slice(2, 7);
        }
      });
  }

}
