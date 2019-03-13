import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
import {ActorsComponent} from './components/actors/actors.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {ActorActressDetailsComponent} from './components/actor-actress-details/actor-actress-details.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'movies', component: MoviesComponent, children: [
      {path: ':id', component: MovieDetailsComponent}
    ]},
  {path: 'actors', component: ActorsComponent, children: [
      {path: ':id', component: ActorActressDetailsComponent}
    ]},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
