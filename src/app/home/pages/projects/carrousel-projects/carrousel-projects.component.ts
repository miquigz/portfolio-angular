import { Component, ViewChild } from '@angular/core';

import { CarouselConfig, CarouselComponent } from 'ng-carousel-cdk';


// import { CompleteCarouselConfig } from 'ng-carousel-cdk/lib/private/models/carousel-config';
interface CarouselItem {
  index: number;
  fecha:string;
  name:string;
  description:string;
  image:string;
  altimg?:string;
  hrefUrl:string;
}

@Component({
  selector: 'app-carrousel-projects',
  templateUrl: './carrousel-projects.component.html',
  styleUrls: ['./carrousel-projects.component.css']
})
export class CarrouselProjectsComponent {
  // @Input() projects: ProjectItem[] = [];
  @ViewChild(CarouselComponent) carouselRef!: CarouselComponent;


  //todo: Insertar mediante inputs los proyectos.

  config: CarouselConfig<CarouselItem>;

  slideActual:number = 0;

  slideWidthActual:number = 65;

  constructor() {

    console.log()
    window.innerWidth < 768 ? this.slideWidthActual = 100 : this.slideWidthActual = 50; 


    this.config = {
      alignMode: 'center' as any,
      slideWidth: this.slideWidthActual,
      shouldRecalculateOnResize: true,
      items: [
        {
          index: 0,
          fecha: '2020',
          name: 'Adventure Graphic',
          description: 'Adventure Graphic - 2020 "Alice", JS & CSS Vanilla, webpack',
          image: '../../../../../assets/alice.webp',
          altimg: 'Alice Project',
          hrefUrl: 'https://github.com/miquigz/AliceProject'
        },
        {
          index: 1,
          fecha: '2021',
          name: 'Programming Practices',
          description: 'Pascal, Java, Assembly WinMips, Assembly MSX88',
          image: '../../../../../assets/winmipsAssembly.webp',
          altimg: 'Imagen de proyecto 4',
          hrefUrl: 'https://github.com/stars/miquigz/lists/practicas-facultad'
        },
        {
          index: 2,
          fecha: '2022',
          name: 'Postcard App',
          description: 'Monolitic Application - 2022 "Postcard App", Handlebars, NodeJS, ExpressJS, MongoDB, Mongoose, Deployed:RailWay',
          image: '../../../../../assets/postcardApp.webp',
          altimg: 'Imagen de proyecto 3',
          hrefUrl: 'https://github.com/miquigz/final-project'
        },
        {
          index: 3,
          fecha: '2022',
          name: 'Inventory Management',
          description: 'Angular(material, ng2-charts, tailwindcss), NodeJS, Expressjs, MongoDB',
          image: '../../../../../assets/inventory.webp',
          altimg: 'Imagen del proyecto Inventory Management',
          hrefUrl: 'https://github.com/miquigz/front-management_Inventory'

        },
        {
          index: 4,
          fecha: '2023',
          name: 'E-Wallet, Finnegans - Alkemy',
          description: 'Angular 14, NgRX, RxJS, TailwindCSS, Leaflet, Echarts, Karma, Jasmine, (SCRUM - JIRA - SLACK)',
          image: '../../../../../assets/alkybank.webp',
          altimg: 'Imagen del proyecto 5, e-wallet finnegans - alkemy',
          hrefUrl: 'https://github.com/Finnegans-Angular-W1/ANGFIN-T2/tree/develop'
        }
      ],
    }
  }

  toSlideProject(index:number){
    this.carouselRef.setIndex(index);
  }

}
