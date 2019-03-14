import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MoviesModule} from './movies/movies.module';
import {ActorActressModule} from './actor-actress/actor-actress.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    ActorActressModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
