import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ActorActressCardComponent } from './components/actor-actress-card/actor-actress-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ActorActressDetailsComponent } from './components/actor-actress-details/actor-actress-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    ActorsComponent,
    DashboardComponent,
    MovieCardComponent,
    ActorActressCardComponent,
    MovieDetailsComponent,
    ActorActressDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
