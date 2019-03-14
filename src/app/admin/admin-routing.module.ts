import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {ManageMoviesComponent} from './manage-movies/manage-movies.component';
import {ManageActorActressComponent} from './manage-actor-actress/manage-actor-actress.component';
import {CanActivateGuard} from '../guards/can-activate.guard';

const adminRoutes: Routes = [
  { path: 'admin',
    component: AdminHomeComponent,
    canActivate: [CanActivateGuard],
    children: [
      { path: '',
        children: [
          {path: 'manage-movies', component: ManageMoviesComponent},
          {path: 'manage-actor-actress', component: ManageActorActressComponent}
        ]}
    ]}
]
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
