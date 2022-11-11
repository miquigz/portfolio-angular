import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],  
  animations: [
    trigger('openClose', [
      state('open', style({})),
      state('closed', style({
        height: '0px',
        width: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('.8s')
      ]),
      transition('closed => open', [
        animate('920ms', keyframes([
          style({ width: '24.666667%', height:'1.5rem' ,opacity: '0'}), //Offset automatico (omitido)
          style({ width: '34.666667%', height:'2.4rem', opacity: '.2'}),
          style({ width: '40%', height:'2.6rem', opacity: '.4'}),
          style({ width: '50%', height:'2.75rem', opacity: '.9'})
        ]),
        )
      ]),
    ])
  ]
})

export class NavbarComponent implements OnInit {

  constructor() { }

  @ViewChild('menuNav') menu!:ElementRef<HTMLDivElement>;
  
  @Output() selectedSection:EventEmitter<string> = new EventEmitter();

  isOpen = true;
  mostrar:string = '';

  toggle() {
    this.isOpen = !this.isOpen;
    this.animateClickMenu(this.isOpen);
  }

  mouseEnter(sectionAct:string){
    this.mostrar = sectionAct;
  }

  mouseLeave(){
    this.mostrar = '';
  }


  animateClickMenu(openClose:boolean):void{
    if(openClose){
      this.menu.nativeElement.classList.add("animate__jello")
    }else{
      this.menu.nativeElement.classList.remove("animate__jello")
      this.menu.nativeElement.classList.add("animate__rubberBand")
    }
    console.log(this.menu);
  }

  emitSection(section:string){
    this.selectedSection.emit(section);
  }



  ngOnInit(): void {
  }

}