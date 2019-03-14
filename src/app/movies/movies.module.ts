import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesRoutingModule} from './movies.routing.module';
import {MoviesComponent} from './movies/movies.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ]
})
export class MoviesModule { }
