import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`.animate-button-download:hover{
      animation: pulse;
      animation-duration: 1s;
      background-color: #ACB6E5;
      opacity: .8;
      transition: .7s;
    }h2{
      font-family: "Oswald", sans-serif;
      letter-spacing: .2rem;
    }`]
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
