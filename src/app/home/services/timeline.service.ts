import { Injectable } from '@angular/core';

import { TimelineItem } from './../interfaces/timeline-item';
import { timelineSvgs } from './../constants/timeline-svgs/timeline-svgs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private trainingsAndCourses:TimelineItem[];

  private academic:TimelineItem[];

  constructor() { 
    this.academic = [
      {
        title:'Analista en TIC UNLP, Facultad de Informatica',
        spanLatest:true,
        date: '28 de Enero de 2021 - <span class="underline  underline-offset-4">Presente</span>',
        desc:'',
        icon: `${timelineSvgs.info}`
      },
      {
        title:'Itinerario Formativo Diseño Gráfico Multimedial EESN2',
        spanLatest:false,
        date: 'Marzo 2017 - Noviembre 2019',
        desc:'<p class="desc-timeline">Itinerario formativo adicional a la cursada normal, realizado en <span class="dark:text-gray-200 text-gray-700">EESN2</span> Veronica(Punta Indio), Buenos Aires.</p>',
        icon: `${timelineSvgs.school1}`
      },
      {
        title: 'Bachiller en Artes Visuales, EESN2',
        spanLatest:false,
        date: 'Marzo 2014 - Noviembre 2019',
        desc: '',
        icon: `${timelineSvgs.school1}`
      }
    ]

    this.trainingsAndCourses = [
      {
        title:'XAcademy - Santex<span class="latest-timeline">Latest</span>',
        spanLatest: true,
        date:'15 de Marzo de 2023 - <span class="underline underline-offset-4">Presente</span>',
        desc:`Santex and Technology With Purpose Foundation`,
        icon: `${timelineSvgs.santex}`
      },
      {
        title:'Bootcamp Crisalis, Finnegans',
        spanLatest: false,
        date:'23 de Enero de 2023 - 28 de Febrero de 2023',
        desc:`Dentro de los 25 seleccionados entre 300 postulantes al Bootcamp <a href="https://www.finneg.com/ar/adw/bootcamp-crisalis/" target="_blank"
        class="underline underline-offset-2">Crisalis</a>(Angular), ofrecido por Finnegans en conjunto de Alkemy y CESSI.`,
        icon: `${timelineSvgs.academic}`
      },
      {
        title:'Bootcamp NodeJS Developer, Telecom - EducacionIT',
        spanLatest:false,
        date:'20 de Mayo de 2022 - 4 de Noviembre de 2022',
        desc:``,
        icon: `${timelineSvgs.academic}`
      },
      // {
      //   title: 'Javascript Intensivo CILSA, La Plata',
      //   spanLatest:false,
      //   date: '2021 Mayo - Junio',
      //   desc: '',
      //   icon: `${timelineSvgs.school2}`
      // },
      {
        title: 'Introduccion al Desarrollo Web FLACSO Argentina',
        spanLatest:false,
        date:'2021 Abril - Junio',
        desc: '',
        icon: `${timelineSvgs.school2}`
      }
    ]
  }

  getAcademic():TimelineItem[]{
    return this.academic;
  }

  getTrainingsAndCourses():TimelineItem[]{
    return this.trainingsAndCourses;
  }
}
