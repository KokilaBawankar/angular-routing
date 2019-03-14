import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { ActorsComponent } from './actor-actress/actors/actors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorActressCardComponent } from './actor-actress/actor-actress-card/actor-actress-card.component';
import { ActorActressDetailsComponent } from './actor-actress/actor-actress-details/actor-actress-details.component';
import {MoviesModule} from './movies/movies.module';
import {ActorActressModule} from './actor-actress/actor-actress.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    ActorActressModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
