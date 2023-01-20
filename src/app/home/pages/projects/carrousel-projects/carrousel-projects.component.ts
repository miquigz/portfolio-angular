import { throttleTime } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CarouselConfig, CarouselComponent } from 'ng-carousel-cdk';

import { ProjectItem } from 'src/app/home/interfaces/project-item';

// import { CompleteCarouselConfig } from 'ng-carousel-cdk/lib/private/models/carousel-config';
interface CarouselItem {
  index: number;
  fecha:string;
  name:string;
  description:string;
  image:string;
  altimg?:string;
}

@Component({
  selector: 'app-carrousel-projects',
  templateUrl: './carrousel-projects.component.html',
  styleUrls: ['./carrousel-projects.component.css']
})
export class CarrouselProjectsComponent implements OnInit, AfterViewInit {
  // @Input() projects: ProjectItem[] = [];
  @ViewChild(CarouselComponent) carouselRef!: CarouselComponent;


  //todo: Insertar mediante inputs los proyectos.

  config: CarouselConfig<CarouselItem>;

  slideActual:number = 0;

  constructor() {

    this.config = {
      alignMode: 'center' as any,
      slideWidth: 50,
      shouldRecalculateOnResize: false,
      items: [
        {
          index: 0,
          fecha: '2020',
          name: 'Adventure Graphic',
          description: 'Adventure Graphic - 2020 "Alice", JS & CSS Vanilla, webpack',
          image: '../../../../../assets/alice.webp',
          altimg: 'Alice Project'
        },
        {
          index: 1,
          fecha: '2022',
          name: 'Inventory Management',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          image: '../../../../../assets/inventory.webp',
          altimg: 'Imagen del proyecto Inventory Management'
        },
        {
          index: 2,
          fecha: '2020',
          name: 'Postcard App',
          description: 'Monolitic Application - 2022 "Postcard App", Handlebars, NodeJS, ExpressJS, MongoDB, Mongoose, Deployed:RailWay',
          image: '../../../../../assets/postcardApp.webp',
          altimg: 'Imagen de proyecto 2'
        },
        {
          index: 3,
          fecha: '2020',
          name: 'Proyecto 4',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          image: '../../../../../assets/winmipsAssembly.webp',
          altimg: 'Imagen de proyecto 2'
        },
        {
          index: 4,
          fecha: '2020',
          name: 'Proyecto 5',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
          image: '../../../../../assets/gifsapp.webp',
          altimg: 'Imagen de proyecto 2'
        }
        // {name: 2},
        // {name: 3},
      ],
    }

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.carouselRef.itemIndexChange
    // .pipe(
    //   throttleTime(600)
    // )
    // .subscribe((index) => {
    //   this.slideActual = index;
    //   console.log(index);
    // });
  }

}
