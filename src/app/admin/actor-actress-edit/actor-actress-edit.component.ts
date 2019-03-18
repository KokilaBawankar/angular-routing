import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ActorActressService} from '../../actor-actress/actor-actress.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-actor-actress-edit',
  templateUrl: './actor-actress-edit.component.html',
  styleUrls: ['./actor-actress-edit.component.css']
})
export class ActorActressEditComponent implements OnInit {

  actorActress;
  originalActorActress;
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private actorActressService: ActorActressService,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      this.actorActressService.getActorActressById(+data.get('id'))
        .subscribe(actorActress => {
          this.actorActress = JSON.parse(JSON.stringify(actorActress));
          this.originalActorActress = JSON.parse(JSON.stringify(actorActress));
        });
    });
    this.form = new FormGroup({
      'name': new FormControl(this.actorActress.name, [Validators.required]),
      'spouse': new FormControl(this.actorActress.spouse),
      'age': new FormControl(+this.actorActress.age, [Validators.required]),
      'description': new FormControl(this.actorActress.description),
      'dob': new FormControl(this.actorActress.dob),
      'height': new FormControl(this.actorActress.height),
      'movies': new FormControl(this.actorActress.movies),
      'children': new FormControl(this.actorActress.children)
    });
  }

  onSave(form: NgForm) {
    this.actorActressService.editMovie(this.actorActress);
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['admin', 'manage-actor-actress']);
  }

  onSetValue() {
    const actorActress = this.originalActorActress;
    delete actorActress.id;
    delete actorActress.imageUrl;
    this.form.setValue(actorActress);
  }
  onPatchValue() {
    this.form.patchValue({name: this.originalActorActress.name, age: this.originalActorActress.age});
  }
  onResetValue() {
    this.form.reset();
  }
}
