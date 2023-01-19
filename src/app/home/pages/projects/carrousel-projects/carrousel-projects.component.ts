import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ng-carousel-cdk';

import { ProjectItem } from 'src/app/home/interfaces/project-item';

// import { CompleteCarouselConfig } from 'ng-carousel-cdk/lib/private/models/carousel-config';


interface CarouselItem {
  name: number;
}

@Component({
  selector: 'app-carrousel-projects',
  templateUrl: './carrousel-projects.component.html',
  styleUrls: ['./carrousel-projects.component.css']
})
export class CarrouselProjectsComponent implements OnInit {

  //todo: Insertar mediante inputs los proyectos.

  config: CarouselConfig<CarouselItem> = {
    alignMode: 'center' as any,
    slideWidth: 70,
    items: [
      {name: 1},
      {name: 2},
      {name: 3},
    ],
  }

  constructor() { 

  }

  ngOnInit(): void {    
  }

}
