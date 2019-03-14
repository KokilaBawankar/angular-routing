import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../movies/movies.service';
import {ConfirmDialogueService} from '../confirm-dialogue.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  originalMovies;
  movie;
  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private router: Router,
              private confirmDialogueService: ConfirmDialogueService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(movie => {
      this.movie = JSON.parse(JSON.stringify(movie.movie));
      this.originalMovies = JSON.parse(JSON.stringify(movie.movie));
    });
  }

  onSave() {
    this.movieService.editMovie(this.movie);
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['admin', 'manage-movies']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.originalMovies !== this.movie) {
      this.confirmDialogueService.confirm('Discard changes?')
        .subscribe(data => {
          if (data) {
            this.onCancel();
            return true;
          } else {
            return false;
          }
        });
    } else {
      this.onCancel();
      return true;
    }
  }
}
