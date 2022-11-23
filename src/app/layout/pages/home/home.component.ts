import { Component} from '@angular/core';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  // @ViewChild('projects') projectsSection!:any;

  smoothScroll(section:string){
    document.getElementById(`${section}`)?.scrollIntoView({behavior:'smooth'});
  }


	constructor() {
  }



}
