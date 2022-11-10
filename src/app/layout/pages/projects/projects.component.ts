import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit{

  constructor() {
  }

  ngOnInit(){
    AOS.init();
  }


}
