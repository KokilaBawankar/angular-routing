import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

const  moviesRoutes = [
  {path: 'movies', component: MoviesComponent, children: [
      {path: ':id', component: MovieDetailsComponent}
    ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
