import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {ManageMoviesComponent} from './manage-movies/manage-movies.component';
import {ManageActorActressComponent} from './manage-actor-actress/manage-actor-actress.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminHomeComponent,
    ManageMoviesComponent,
    ManageActorActressComponent
  ]

})
export class AdminModule { }
