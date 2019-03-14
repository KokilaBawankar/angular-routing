import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {ManageMoviesComponent} from './manage-movies/manage-movies.component';
import {ManageActorActressComponent} from './manage-actor-actress/manage-actor-actress.component';
import {AdminRoutingModule} from './admin-routing.module';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    ManageMoviesComponent,
    ManageActorActressComponent,
    MovieItemComponent,
    MovieEditComponent
  ]

})
export class AdminModule { }
