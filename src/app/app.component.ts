import { ShowWelcomeService } from './home/services/show-welcome.service';
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
  hideWelcome$:Observable<boolean>;

  constructor(
      private route:Router,
      private settingsService:SettingsService, 
      translate:TranslateService,
      showWelcome:ShowWelcomeService
    ){
    this.hideWelcome$ = showWelcome.getHideWelcome();
    this.routeAct = route.url;  
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    // if(window.navigator.language === 'es-419')//Detect browser language
    //   translate.use('es');
    // else
    //   translate.use('en');
  }

  ngOnInit(){
    //TODO: Detect dark mode browser

    this.darkMode$ = this.settingsService.getDarkModeObservable();

    this.routeAct = this.route.url;
    this.route.events.subscribe((event:Event) => {
      if(event instanceof NavigationStart)
        this.routeAct = event.url;
    });
  }

}
