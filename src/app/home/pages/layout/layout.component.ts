import { ShowWelcomeService } from './../../services/show-welcome.service';
import { Component, ViewChild, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription, tap, Observable } from 'rxjs';

import { LoadedComponentsService } from 'src/app/shared/services/loaded-components.service';
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

  hoverTOP:boolean = false;

  scrollPercentage:number = 0;
  private _documentHeight:number = 1;
  // getScreenWidth:number;

  private sub!:Subscription;
  private subSection!:Subscription;

  hideWelcome$:Observable<boolean>

//Hooks
	constructor(
    private loadComp:LoadedComponentsService,
    private showWelcome:ShowWelcomeService
    ) {
      this.hideWelcome$ = this.showWelcome.getHideWelcome();
    // this.getScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {  
    //Defect value
    this.loadComp.loadedAboutObservable = false;
    this.loadComp.loadedProjectsObservable = false;
    this.sub = fromEvent(window, 'scroll')
    .pipe(
      // throttleTime(1),//debounce
      tap( ( _ ) =>{
        this.onScroll();
        // let scrollTop = window.scrollY;
        // let windowHeight = window.innerHeight;
        this._documentHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
        this.scrollPercentage = Math.round( (window.scrollY / (this._documentHeight - window.innerHeight)) * 100);
        // console.log('asd'+ scrollPercentage);
      })
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
