import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { LocalService } from 'src/app/shared/services/local.service';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  openSettings:boolean = false;
  darkMode:boolean;
  
  @ViewChild('svgSettings') svgSettings!:ElementRef<SVGElement>;

  // data$:Observable<boolean>;

  constructor(private settingsService:SettingsService, private localS:LocalService) { 
    // this.data$ = settingsService.darkModeObservable;
    if (localS.getData('darkMode') === 'true') {
      this.darkMode = true;
      this.settingsService.darkModeObservable = this.darkMode;
    }else{this.darkMode = false}
  }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;//Variable aux, para evitar hacer un subscribe por un boolean q emitimos nosotros(component)
    this.settingsService.darkModeObservable = this.darkMode;
    this.localS.setData('darkMode', `${this.darkMode}`);
  }
  
  leaveSettings(){
    this.openSettings = false;
    this.animationSvg();
  }
  toggleSettings(){
    this.openSettings = !this.openSettings;
    this.animationSvg();
  }
  animationSvg(){
    if(this.openSettings){
      this.svgSettings.nativeElement.classList.add("animate__jello")
    }else{
      this.svgSettings.nativeElement.classList.remove("animate__jello")
      this.svgSettings.nativeElement.classList.add("animate__swing")
    }
  }
}
