import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../movies/movies.service';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {

  movies;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.moviesBehaviorSubject
      .subscribe(movies => {
        this.movies = movies;
      });
  }

}
