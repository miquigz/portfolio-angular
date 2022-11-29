import { Router } from '@angular/router';
import { LoadedComponentsService } from './../../../layout/services/loaded-components.service';
import { SettingsService } from 'src/app/core/services/settings.service';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { fromEvent, Subscription, tap, throttleTime, Observable } from 'rxjs';

import { SvgsService } from './../../services/svgs.service';
import { NavItem } from '../../interfaces/nav-item';


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
  //variables
  isOpen = true;
  mostrar:string = '';
  mobileResize:boolean = false;

  @ViewChild('menuNav') menu!:ElementRef<HTMLDivElement>;
  @Output() selectedSection:EventEmitter<string> = new EventEmitter();

  // @Input() loadedAbout:boolean = false; 
  // @Input() loadedProjects:boolean = false;

  loadedProjects$!:Observable<boolean>;
  loadedAbout$!:Observable<boolean>;

  navItems:NavItem[] = [];

  private subResize!:Subscription;

  routeActual:string = 'none';
  
  darkMode$!:Observable<boolean>;

  //hooks
  constructor(private svgs:SvgsService,
    settingsService:SettingsService,
    loadedComp:LoadedComponentsService,
    private route:Router
    ) { 
      this.darkMode$ = settingsService.darkModeObservable;
      this.loadedProjects$ = loadedComp.loadedProjectsObservable
      this.loadedAbout$ = loadedComp.loadedAboutObservable;
    }

  ngOnInit(): void {
    this.routeActual = this.route.url;

    this.navItems = this.svgs.getAllItems();
    this.mobileResize = window.innerWidth < 425;

    this.subResize = fromEvent(window, 'resize').pipe(
      throttleTime(500),//debounce resize
      tap( ( _ )=> this.onWindowResize())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subResize.unsubscribe();
  }


//methods
  redesNavItem(name:string):boolean{
    return name === 'linkedin' || name === 'github' || name === 'twitter';
  }//TODO: Agregar twitter a la lista (navbar) de redes.

  componentsNav(item:string):boolean{
    return item === 'about' || item === 'projects';
  }

  onWindowResize() {
    if(!this.isOpen && window.innerWidth < 1025){
      this.isOpen = true;
      console.log('fixed :/ .')
    }
    this.mobileResize = window.innerWidth < 425;
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
  recibeSection(event:string){
    this.selectedSection.emit(event);
  }

  navItemLink(item:NavItem):boolean{
    return item.name === 'about' || item.name === 'projects' || item.name === 'perfil';
  }

}