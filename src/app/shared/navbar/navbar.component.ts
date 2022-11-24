import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { fromEvent, Subscription, tap, throttleTime } from 'rxjs';

import { SvgsService } from '../services/svgs.service';
import { NavItem } from '../interfaces/nav-item';

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

export class NavbarComponent implements OnInit, OnDestroy{
  //data

  isOpen = true;
  mostrar:string = '';

  @ViewChild('menuNav') menu!:ElementRef<HTMLDivElement>;
  @Output() selectedSection:EventEmitter<string> = new EventEmitter();

  @Input() loadedAbout:boolean = false; 
  @Input() loadedProjects:boolean = false;

  navItems:NavItem[] = [];

  private subResize!:Subscription;

  //hooks
  constructor(private svgs:SvgsService) { }

  ngOnInit(): void {
    this.navItems = this.svgs.getAllItems();
    console.log(this.navItems);

    this.subResize = fromEvent(window, 'resize').pipe(
      throttleTime(500),
      tap( ( _ ) => this.onWindowResize())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subResize.unsubscribe();
  }





//methods
  loadedComponents(item:NavItem):boolean{
    return item.name === 'about' && this.loadedAbout
    || item.name === 'projects' && this.loadedProjects
    || item.name !== 'projects' && item.name !== 'about';
  }

  onWindowResize() {
    if(!this.isOpen && window.innerWidth < 1025){
      this.isOpen = true;
      console.log('fixed :/ .')
    }
  }
  
//Menu button
  animateClickMenu(openClose:boolean):void{
    if(openClose){
      this.menu.nativeElement.classList.add("animate__jello")
    }else{
      this.menu.nativeElement.classList.remove("animate__jello")
      this.menu.nativeElement.classList.add("animate__rubberBand")
    }
  }

  toggle():void{
    this.isOpen = !this.isOpen;
    this.animateClickMenu(this.isOpen);
  }

//Click navitem
  emitSection(section:string):void{
    this.selectedSection.emit(section);
  }

}