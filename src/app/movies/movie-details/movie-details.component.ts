import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id;
  movie;
  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params: Params) => {
        this.id = params.params['id'];
        this.moviesService.getMovieById(+this.id)
          .subscribe(movie => this.movie = movie);
        window.scroll(0, 0);
      });
  }

}
