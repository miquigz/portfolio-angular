import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent{
  
  @HostListener('scroll', ['$event'])

  onScroll(event:any) {
    console.log(event);
  }

  constructor() {
  }


}
