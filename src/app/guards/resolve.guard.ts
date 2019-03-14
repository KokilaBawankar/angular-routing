import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, ActivatedRoute, Router} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {MoviesService} from '../movies/movies.service';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private router: Router) {}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    return this.moviesService.getMovieByIdToManage(+id).pipe(
       // take(1),  The Router guards require an observable to complete, meaning it has emitted all of its values. You use the take operator with an argument of 1 to ensure that the Observable completes after retrieving the first value from the Observable returned by the getMoiveByIdToManage method.
      take(1),
      mergeMap(movie => {
        if (movie) {
          return of(movie);
        } else { // id not found
          this.router.navigate(['/movies']);
          return EMPTY;
        }
      })
    );
  }
}
