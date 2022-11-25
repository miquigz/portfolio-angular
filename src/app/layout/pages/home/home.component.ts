import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription, tap, throttleTime } from 'rxjs';
import { SettingsService } from 'src/app/core/services/settings.service';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,  OnDestroy{
  //Data
  @ViewChild('about') about:any;
  @ViewChild  ('projects') projects:any;

  loadedProjects:boolean = false;
  loadedAbout:boolean = false;

  scrollUp = false;
  currentPosition = window.pageYOffset;

  private sub!:Subscription;

  darkMode$!:Observable<boolean>;
//Hooks
	constructor(settingsService:SettingsService) {
    this.darkMode$ = settingsService.darkModeObservable;
  }

  ngOnInit(): void {
    this.sub = fromEvent(window, 'scroll').pipe(
      throttleTime(300),
      tap( ( _ ) => this.onScroll())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
//Methods:
  onScroll() {
    // console.log(window.pageYOffset < this.currentPosition);
    this.scrollUp = window.pageYOffset < this.currentPosition;
    if(!this.scrollUp){
      this.loadedProjects = this.projects !== undefined;
      this.loadedAbout = this.about !== undefined;
    }
    this.currentPosition = window.pageYOffset;
  }
  
  smoothScroll(section:string){
    document.getElementById(`${section}`)?.scrollIntoView({behavior:'smooth'});
  }


}
