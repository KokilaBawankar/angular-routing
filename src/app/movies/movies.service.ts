import { Injectable } from '@angular/core';
import {MOVIES} from './mock-movies';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movies;
  constructor() {
    this.movies = MOVIES;
  }
  getMovies() {
    return of(this.movies);
  }
  getMovieById(id: number) {
    return of(this.movies.find(movie => movie.id === id));
  }
}
