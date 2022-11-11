import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
