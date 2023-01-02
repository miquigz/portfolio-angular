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
      title:'Inventory Management App',
      imgSrc:'../../../../assets/inventory.webp',
      desc:'FullStack Project (MEAN)',
      smallDesc:'Angular(material, ng2-charts, tailwindcss), NodeJS, Expressjs, MongoDB',
      altImg:'SPA with Back-end Project',
      hrefLink:'https://github.com/miquigz/front-management_Inventory'
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
      title:'Programming Practices',
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
