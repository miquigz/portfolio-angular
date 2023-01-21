import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { ProjectItem } from '../../interfaces/project-item';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  mesesTotalExp:number = 0; //ExpLaboral, total de meses
  diasTotalExp:number = 0; //ExpLaboral, total de dias

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

  constructor() {    }

  ngOnInit(){
    this.calcularExpLaboral();
    AOS.init();
  }

  calcularExpLaboral(){
    const fechaActual = new Date();
    const fechaObjetivo = new Date(2022,9,14); //los meses empiezan en 0 en javascript
    const milisegundosDiferencia = fechaActual.getTime() - fechaObjetivo.getTime();

    this.mesesTotalExp = Math.floor(milisegundosDiferencia / (1000 * 60 * 60 * 24 * 30));
    this.diasTotalExp = Math.floor((milisegundosDiferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    console.log(this.mesesTotalExp);
    console.log(this.diasTotalExp);
  }


}
