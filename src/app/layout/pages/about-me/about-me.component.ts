import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Output() posOnComponent:EventEmitter<boolean> = new EventEmitter();
  @Output() posLeaveComponent:EventEmitter<boolean> = new EventEmitter();


  componentView(){
    this.posOnComponent.emit(true);
  }

  componentLeave(){
    this.posLeaveComponent.emit(false);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
