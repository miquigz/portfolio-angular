import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectItem } from 'src/app/layout/interfaces/project-item';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project:ProjectItem = { title: '', desc: '', imgSrc: '', smallDesc: '', hrefLink: '', altImg: ''}
  @Input() hoverActual:string = '';
  
  @Output() posOnComponent:EventEmitter<string> = new EventEmitter();

  hoverComponent:boolean = false;

  leaveComponent(){
    this.posOnComponent.emit('');
    this.hoverComponent = false;
  }

  onComponent(){
    this.hoverComponent = true;
    this.posOnComponent.emit(this.project.title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
