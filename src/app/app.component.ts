import { Event, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import { Observable } from 'rxjs';

import { SettingsService } from './core/services/settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Miqueas Gimenez';

  routeAct:string = '';
  darkMode$!:Observable<Boolean>;

  constructor(private route:Router, settingsService:SettingsService, private translate:TranslateService){
    this.routeAct = route.url;
    this.darkMode$ = settingsService.darkModeObservable || false;

    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(){
    this.routeAct = this.route.url;
    this.route.events.subscribe((event:Event) => {
      if(event instanceof NavigationStart)
        this.routeAct = event.url;
    });
  }
}
