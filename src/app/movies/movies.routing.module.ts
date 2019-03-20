import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {CanActivateGuard} from '../guards/can-activate.guard';

const  moviesRoutes: Routes = [
  { path: '',
    component: MoviesComponent,
    children: [
      {path: ':id', component: MovieDetailsComponent}
    ],
    canActivate: [CanActivateGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
