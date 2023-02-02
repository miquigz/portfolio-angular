import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  trainingsAndCourses;

  constructor() { 
    this.trainingsAndCourses = [
      {
        title:'Bootcamp Crisalis, Finnegans',
        spanLatest: true,
        date:'23 Enero de 2023 - Presente',
        desc:'Dentro de los 25 seleccionados entre 300 postulantes al Bootcampo Crisalis(Angular), ofrecido por Finnegans en conjunto de Alkemy y CESSI.',
        icon: 'academic'
      },
      {
        title:'Bootcamp NodeJS Developer, Telecom - EducacionIT',
        spanLatest:false,
        date:'20 de Mayo de 2022 - 4 de Noviembre de 2022',
        desc:'Bootcamp ofrecido por Telecom en el programa digit@lers, en conjunto con EducacionIT.',
        icon:'academic'
      },
      {
        title: 'Javascript Intensivo CILSA, La Plata',
        spanLatest:false,
        date: '2021 Mayo - Junio',
        desc: '',
        icon: 'school2'
      },
      {
        title: 'Introduccion al Desarrollo Web FLACSO Argentina',
        spanLatest:false,
        date:'2021 Abril - Junio',
        desc: '',
        icon:'school2'
      }
    ]
  }
}
