import { TimelineItem } from './../../interfaces/timeline-item';
import { TimelineService } from './../../services/timeline.service';
import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  aniosTotalExp:number = 0; //ExpLaboral, total de años
  mesesTotalExp:number = 0; //ExpLaboral, total de meses
  diasTotalExp:number = 0; //ExpLaboral, total de dias

  hoverActual:string = '';

  trainingsAndCourses:TimelineItem[] = [];
  academic:TimelineItem[] = [];
  

  constructor(private timelineService:TimelineService) {   

  }

  ngOnInit(){
    this.trainingsAndCourses = this.timelineService.getTrainingsAndCourses();
    this.academic = this.timelineService.getAcademic();

    this.calcularExpLaboral();
    AOS.init();
  }

  calcularExpLaboral(){
    const fechaActual = new Date();
    const fechaObjetivo = new Date(2023,6,1); //los meses empiezan en 0 en javascript, (2023 abril 3)
    const milisegundosDiferencia = fechaActual.getTime() - fechaObjetivo.getTime();

    this.mesesTotalExp = Math.floor(milisegundosDiferencia / (1000 * 60 * 60 * 24 * 30));
    this.diasTotalExp = Math.floor((milisegundosDiferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    this.aniosTotalExp = Math.floor(this.mesesTotalExp / 12);
    this.mesesTotalExp = this.mesesTotalExp % 12;
    // console.log(this.mesesTotalExp);
    // console.log(this.diasTotalExp);
  }


}
