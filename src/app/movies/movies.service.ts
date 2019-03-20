import { Injectable } from '@angular/core';
import {MOVIES} from './mock-movies';
import {BehaviorSubject, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movies;
  moviesBehaviorSubject: BehaviorSubject<any>;
  url = 'https://practice-angular-2707b.firebaseio.com/movies.json';
  constructor(private httpClient: HttpClient) {
    // this.movies = MOVIES;
    this.moviesBehaviorSubject = new BehaviorSubject(this.movies);
  }

  fetchMovies() {
    this.httpClient.get(this.url)
      .subscribe(movies => {
        this.movies = movies;
        this.moviesBehaviorSubject.next(movies);
      });
  }

  getMovies() {
    return of(this.movies);
  }
  getMovieById(id: number) {
    return of(this.movies.find(movie => movie.id === id));
  }

  getMovieByIdToManage(id: number) {
    return of(this.movies.find(movie => movie.id === id))
      .pipe(
        delay(3000)
      );
  }

  editMovie(movie) {
    this.movies.filter((item, index) => {
      if (item.id === movie.id) {
        this.movies[index] = movie;
      }
    });
    this.httpClient.put(this.url, this.movies)
      .subscribe(data => console.log(data));
  }
}
