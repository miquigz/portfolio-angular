import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectItem } from 'src/app/layout/interfaces/project-item';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project!:ProjectItem;
  @Input() hoverActual:string = '';

  @Output() posOnComponent:EventEmitter<string> = new EventEmitter();

  leaveComponent(){
    this.posOnComponent.emit('');
  }

  onComponent(){
    this.posOnComponent.emit(this.project.title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
