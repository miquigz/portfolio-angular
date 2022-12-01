import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { ProjectItem } from '../../interfaces/project-item';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`
      h2{letter-spacing: 2rem; font-family: 'Oswald', sans-serif; letter-spacing: 1rem;}
  `]
})
export class ProjectsComponent implements OnInit{

  projects:ProjectItem[] = [
    {
      title:'Search Country App',
      imgSrc:'../../../../assets/paises.webp',
      desc:'SPA Angular',
      smallDesc:'Consuming API with Angular',
      altImg:'SPA Project',
      hrefLink:'https://github.com/miquigz/searchCountryApp'
    },
    {
      title:'PostCard App',
      imgSrc:'../../../../assets/postcardApp.webp',
      desc:'FullStack Back-End Project',
      smallDesc:'MVC CRUD, nodejs, hbs, mongodb, expressjs',
      altImg:'PostCard App Image',
      hrefLink:'https://github.com/miquigz/final-project'
    },
      {
      title:'Alice',
      imgSrc:'../../../../assets/alice.webp',
      desc:'Adventure Graphic - 2020',
      smallDesc:'JS & CSS Vanilla, webpack',
      altImg:'Alice Project',
      hrefLink: 'https://github.com/miquigz/AliceProject'
    },
    {
      title:'Practicas de Programacion',
      imgSrc:'../../../../assets/winmipsAssembly.webp',
      desc:'Practicas de Programacion hechas en la facultad',
      smallDesc:'Hechas en 2021-2022',
      altImg:'Assembly Pascal Java',
      hrefLink:'https://github.com/stars/miquigz/lists/practicas-facultad'
    }
  ]
  hoverActual:string = '';

  changeActComponent(actComponent:string){
    this.hoverActual = actComponent;
  }

  constructor() {
  }

  ngOnInit(){
    AOS.init();
  }


}
