import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PopupComponent} from './popup/popup.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'named-outlet', component: PopupComponent, outlet: 'popup'},
  {path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
  {path: 'actors', loadChildren: './actor-actress/actor-actress.module#ActorActressModule'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
