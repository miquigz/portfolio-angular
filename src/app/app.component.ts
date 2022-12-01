import { Observable } from 'rxjs';
import { SettingsService } from './core/services/settings.service';
import { Event, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Miqueas Gimenez';

  routeAct:string = '';
  darkMode$!:Observable<Boolean>;

  constructor(private route:Router, settingsService:SettingsService){
    this.routeAct = route.url;
    this.darkMode$ = settingsService.darkModeObservable;
  }

  ngOnInit(){
    this.routeAct = this.route.url;
    this.route.events.subscribe((event:Event) => {
      if(event instanceof NavigationStart)
        this.routeAct = event.url;
    });
  }
}
