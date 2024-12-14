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
        title:'Tecnicatura Universitaria en Programación Universidad Tecnológica Nacional (UTN)',
        spanLatest:true,
        date: '1 de Marzo de 2023 - <span class="underline  underline-offset-4">Presente</span>',
        desc:'',
        icon: `${timelineSvgs.utn}`,
        rawStartDate: new Date(2023,2,1),
        rawEndDate: new Date()
      },
      {
        title:'Analista en TIC UNLP, Facultad de Informatica',
        spanLatest:false,
        date: '28 de Enero de 2021 - Abril 2023',
        desc:'',
        icon: `${timelineSvgs.info}`,
        rawStartDate: new Date(2021,0,28),
        rawEndDate: new Date(2023,3,1)
      },
      {
        title:'Itinerario Formativo Diseño Gráfico Multimedial EESN2',
        spanLatest:false,
        date: 'Marzo 2017 - Noviembre 2019',
        desc:'<p class="desc-timeline">Itinerario formativo adicional a la cursada normal, realizado en <span class="dark:text-gray-200 text-gray-700">EESN2</span> Veronica(Punta Indio), Buenos Aires.</p>',
        icon: `${timelineSvgs.school1}`,
        rawStartDate: new Date(2017,2,1),
        rawEndDate: new Date(2019,10,1)
      },
      {
        title: 'Bachiller en Artes Visuales, EESN2',
        spanLatest:false,
        date: 'Marzo 2014 - Noviembre 2019',
        desc: '',
        icon: `${timelineSvgs.school1}`,
        rawStartDate: new Date(2014,2,1),
        rawEndDate: new Date(2019,10,1)
      }
    ]

    this.trainingsAndCourses = [
      {
        title:'Bootcamp Crisalis, Finnegans',
        spanLatest: true,
        date:'23 de Enero de 2023 - 28 de Febrero de 2023',
        desc:`Bootcamp <a href="https://www.finneg.com/ar/adw/bootcamp-crisalis/" target="_blank"
        class="underline underline-offset-2">Crisalis</a>(Angular), ofrecido por Finnegans en conjunto de Alkemy y CESSI.`,
        icon: `${timelineSvgs.academic}`,
        rawStartDate: new Date(2023,0,23),
        rawEndDate: new Date(2023,1,28)
      },
      {
        title:'Bootcamp NodeJS Developer, Telecom - EducacionIT',
        spanLatest:false,
        date:'20 de Mayo de 2022 - 4 de Noviembre de 2022',
        desc:``,
        icon: `${timelineSvgs.academic}`,
        rawStartDate: new Date(2022,4,20),
        rawEndDate: new Date(2022,10,4)

      },
      {
        title: 'Javascript Intensivo CILSA, La Plata',
        spanLatest:false,
        date: '2021 Mayo - 2021 Junio',
        desc: '',
        icon: `${timelineSvgs.school2}`,
        rawStartDate: new Date(2021,4,1),
        rawEndDate: new Date(2021,5,1)
      },
      {
        title: 'Introduccion al Desarrollo Web FLACSO Argentina',
        spanLatest:false,
        date:'2021 Abril - Junio',
        desc: '',
        icon: `${timelineSvgs.school2}`,
        rawStartDate: new Date(2021,3,1),
        rawEndDate: new Date(2021,5,1)
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
