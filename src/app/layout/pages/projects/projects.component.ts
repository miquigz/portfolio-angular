import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { ProjectItem } from '../../interfaces/project-item';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [`h2{letter-spacing: 2rem; font-family: 'Oswald', sans-serif; letter-spacing: 1rem;}`]
})
export class ProjectsComponent implements OnInit{

  projects:ProjectItem[] = [
    {
      title:'Search Country App',
      imgSrc:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      desc:'SPA Angular',
      smallDesc:'Consuming API with Angular',
      altImg:'SPA Project'
    },
    {
      title:'PostCard App',
      imgSrc:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      desc:'FullStack Back-End Project',
      smallDesc:'MVC CRUD, nodejs, hbs, mongodb, expressjs',
      altImg:'PostCard App Image'
    },
      {
      title:'Alice',
      imgSrc:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      desc:'Adventure Graphic',
      smallDesc:'JS Vanilla',
      altImg:'Alice Project'
    },
    {
      title:'Search Gifs App',
      imgSrc:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      desc:'Angular WebApp',
      smallDesc:'Consuming API with Angular',
      altImg:'Image of Search Gifs App'
    },
  ]


  constructor() {
  }

  ngOnInit(){
    AOS.init();
  }


}
