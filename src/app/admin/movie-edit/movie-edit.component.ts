import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../movies/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie;
  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(movie => {
      this.movie = JSON.parse(JSON.stringify(movie.movie));
    });
  }

  onSave() {
    this.movieService.editMovie(this.movie);
    this.router.navigate(['admin', 'manage-movies']);
  }
  onCancel() {}

}
