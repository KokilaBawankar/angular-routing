import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAddDynamicActorActress]'
})
export class AddDynamicActorActressDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
