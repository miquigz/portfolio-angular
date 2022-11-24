import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, tap, throttleTime } from 'rxjs';
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

//Hooks
	constructor() {
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
    console.log('Projects:',this.loadedProjects);
    console.log('about :',this.loadedAbout);
  }
  
  smoothScroll(section:string){
    document.getElementById(`${section}`)?.scrollIntoView({behavior:'smooth'});
  }


}
