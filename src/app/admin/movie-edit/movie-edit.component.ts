import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {MoviesService} from '../../movies/movies.service';
import {ConfirmDialogueService} from '../confirm-dialogue.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  originalMovies;
  movie;
  changesSaved = false;
  confirmDialogRepeatingFlag = false;
  allowEdit;
  fragment;
  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private router: Router,
              private confirmDialogueService: ConfirmDialogueService,) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(movie => {
      this.movie = JSON.parse(JSON.stringify(movie.movie));
      this.originalMovies = JSON.parse(JSON.stringify(movie.movie));
    });

    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.allowEdit = params.get('allowEdit');
    });
    this.activatedRoute.fragment.subscribe((value: string) => {
      this.fragment = value;
    });
  }

  onSave() {
    this.movieService.editMovie(this.movie);
    this.changesSaved = true;
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['admin', 'manage-movies']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isEquivalent(this.originalMovies, this.movie ) && !this.changesSaved && !this.confirmDialogRepeatingFlag) {
      this.confirmDialogRepeatingFlag = true;
      return this.confirmDialogueService.confirm('Discard changes?');
    } else {
      return true;
    }
  }

  isEquivalent(a, b) {
    // Create arrays of property names
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (JSON.stringify(a[propName]) !== JSON.stringify(b[propName])) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }
}
