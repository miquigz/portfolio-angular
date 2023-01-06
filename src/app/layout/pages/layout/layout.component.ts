import { Component, ViewChild, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable, Subscription, throttleTime, tap } from 'rxjs';

import { SettingsService } from 'src/app/core/services/settings.service';
import { LoadedComponentsService } from '../../services/loaded-components.service';
// import * as AOS from 'aos';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit,  OnDestroy{
  //Data
  @ViewChild('about') about:any;
  @ViewChild  ('projects') projects:any;

  scrollUp:boolean = false;
  currentPosition:number = window.pageYOffset;

  private sub!:Subscription;
  private subSection!:Subscription;

  darkMode$!:Observable<boolean>;
//Hooks
	constructor(
    settingsService:SettingsService,
    private loadComp:LoadedComponentsService
    ) {
    this.darkMode$ = settingsService.getDarkModeObservable();
  }

  ngOnInit(): void {
    //Defect value
    this.loadComp.loadedAboutObservable = false;
    this.loadComp.loadedProjectsObservable = false;

    this.sub = fromEvent(window, 'scroll').pipe(
      throttleTime(300),//debounce
      tap( ( _ ) => this.onScroll())
    ).subscribe();

    this.subSection = this.loadComp.clickedElementObservable.subscribe((value:string)=>{
      if (value !== null){
        document.getElementById(`${value}`)?.scrollIntoView({behavior:'smooth'});
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subSection.unsubscribe();
  }
  
//Methods:
  onScroll() { //Show components links nav when scroll down
    // console.log(window.pageYOffset < this.currentPosition);
    this.scrollUp = window.pageYOffset < this.currentPosition;
    if(!this.scrollUp){
      if (this.projects !== undefined) {
        this.loadComp.loadedProjectsObservable = true;
      }
      if(this.about !== undefined){
        this.loadComp.loadedAboutObservable = true;
      }
    }
    this.currentPosition = window.pageYOffset;
  }

}
