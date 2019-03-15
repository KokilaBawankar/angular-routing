import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MoviesModule} from './movies/movies.module';
// import { ActorActressModule} from './actor-actress/actor-actress.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupComponent } from './popup/popup.component';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    // MoviesModule,   for lazy loading remove these module from import
    // ActorActressModule,
    AuthModule,
    AdminModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
