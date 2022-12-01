import { LoadedComponentsService } from './../../services/loaded-components.service';
import { Component, ViewChild, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable, Subscription, throttleTime, tap } from 'rxjs';
import { SettingsService } from 'src/app/core/services/settings.service';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit,  OnDestroy{
  //Data
  @ViewChild('about') about:any;
  @ViewChild  ('projects') projects:any;

  scrollUp = false;
  currentPosition = window.pageYOffset;

  private sub!:Subscription;
  private subSection!:Subscription;

  darkMode$!:Observable<boolean>;
//Hooks
	constructor(
    settingsService:SettingsService,
    private loadComp:LoadedComponentsService
    ) {
    this.darkMode$ = settingsService.darkModeObservable;
  }

  ngOnInit(): void {
    this.sub = fromEvent(window, 'scroll').pipe(
      throttleTime(300),
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
  onScroll() {
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
