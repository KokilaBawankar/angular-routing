import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AddDynamicActorActressDirective} from '../add-dynamic-actor-actress.directive';
import {ActorActressService} from '../../actor-actress/actor-actress.service';
import {ActorActressItemComponent} from '../actor-actress-item/actor-actress-item.component';
import {interval} from 'rxjs';

@Component({
  selector: 'app-manage-actor-actress',
  templateUrl: './manage-actor-actress.component.html',
  styleUrls: ['./manage-actor-actress.component.css']
})
export class ManageActorActressComponent implements OnInit {

  @ViewChild(AddDynamicActorActressDirective) hostOfDynamicComponents: AddDynamicActorActressDirective;
  actorActresses;

  constructor(private actorActressService: ActorActressService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.actorActressService.getActorActress()
      .subscribe(actorActress => {
        this.actorActresses = actorActress;
        this.loadComponent(this.actorActresses[0]);
        this.actorActresses.length > 1 ? this.addComponents() : null;
      });
  }

  loadComponent(data: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ActorActressItemComponent);
    const viewContainerRef = this.hostOfDynamicComponents.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.actorActress = data;
  }

  addComponents() {
    let nextActorActressIndex = 1;
    const intervall = setInterval(() => {
      if (nextActorActressIndex === this.actorActresses.length) {
        clearInterval(intervall);
        return;
      }
      this.loadComponent(this.actorActresses[nextActorActressIndex])
      nextActorActressIndex++;
    }, 1500);
  }
}
