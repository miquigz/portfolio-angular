import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  openSettings:boolean = false;
  
  @ViewChild('svgSettings') svgSettings!:ElementRef<SVGElement>;

  constructor() { }

  ngOnInit(): void {
  }

  leaveSettings(){
    console.log('leave settings');
    this.openSettings = false;
  }

  toggleSettings(){
    this.openSettings = !this.openSettings;
    if(this.openSettings){
      this.svgSettings.nativeElement.classList.add("animate__jello")
    }else{
      this.svgSettings.nativeElement.classList.remove("animate__jello")
      this.svgSettings.nativeElement.classList.add("animate__rubberBand")
    }
  }
}
