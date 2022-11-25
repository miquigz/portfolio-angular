import { SettingsService } from './../../../core/services/settings.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  openSettings:boolean = false;
  darkMode:boolean = false;
  
  @ViewChild('svgSettings') svgSettings!:ElementRef<SVGElement>;


  data$:Observable<boolean>;

  constructor(private settingsService:SettingsService) { 
    this.data$ = settingsService.darkModeObservable;
    //this.darkMode //
    //TODO: Guardar theme en localStorage
  }

  ngOnInit(): void {
  }

  leaveSettings(){
    this.openSettings = false;
    this.animationSvg();
  }

  toggleSettings(){
    this.openSettings = !this.openSettings;
    this.animationSvg();
  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;//Variable aux, para evitar hacer un subscribe por un boolean q emitimos nosotros(component)
    this.settingsService.darkModeObservable = this.darkMode;
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
