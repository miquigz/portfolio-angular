import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TimelineItem } from 'src/app/home/interfaces/timeline-item';

@Component({
  selector: 'app-timeline-bar',
  templateUrl: './timeline-bar.component.html',
  styleUrls: ['./timeline-bar.component.css']
})
export class TimelineBarComponent implements OnInit {
  years: number[] = [2021, 2022, 2023, 2024, 2025];

  mergedData:TimelineItem[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {trainingsAndCourses: TimelineItem[], academic: TimelineItem[]}, private matDialog:MatDialog) { }

  ngOnInit(): void {

    this.data.trainingsAndCourses.forEach((item:TimelineItem) => {
      this.mergedData.push(item);
    })

    this.data.academic.forEach((item:TimelineItem) => {
      if (!(item.title == 'Itinerario Formativo Diseño Gráfico Multimedial EESN2' || item.title == 'Bachiller en Artes Visuales, EESN2')){
        this.mergedData.push(item);
      }
    })

    this.mergedData.sort((a:TimelineItem, b:TimelineItem) => {
      if (a.rawStartDate < b.rawStartDate){
        return -1;
      }
      if (a.rawStartDate > b.rawStartDate){
        return 1;
      }
      return 0;
    })

    this.mergedData.push({
      title:"Angular Developer - Freelance",
      date :"October 14, 2022 - January 27, 2023 (4 Months)",
      desc: "Developed a web application for a client using Angular 12, Angular Material, Firebase, and Firestore.",
      rawStartDate: new Date(2022,9,14),
      rawEndDate: new Date(2023,0,27),
      spanLatest: false,
      icon: `<svg class="dark:fill-gray-300 w-[18px] h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30"><path d="M 14 3 C 12.895 3 12 3.895 12 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 16 C 2 17.105 2.895 18 4 18 L 26 18 C 27.105 18 28 17.105 28 16 L 28 7 C 28 5.895 27.105 5 26 5 L 18 5 C 18 3.895 17.105 3 16 3 L 14 3 z M 7 13 C 7.552 13 8 13.448 8 14 L 8 15 C 8 15.552 7.552 16 7 16 C 6.448 16 6 15.552 6 15 L 6 14 C 6 13.448 6.448 13 7 13 z M 23 13 C 23.552 13 24 13.448 24 14 L 24 15 C 24 15.552 23.552 16 23 16 C 22.448 16 22 15.552 22 15 L 22 14 C 22 13.448 22.448 13 23 13 z M 2 19.443359 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 19.443359 C 27.409 19.787359 26.732 20 26 20 L 4 20 C 3.268 20 2.591 19.787359 2 19.443359 z"></path></svg>`
    })

    this.mergedData.push({
      title: "Fullstack Developer - Finnegans",
      date: "3 de Abril 2023 - 30 de Junio 2023 (3 Meses)",
      desc: "Internship at Finnegans, as a Fullstack developer. Development of a management software; HCM (Human Capital Management).",
      rawStartDate: new Date(2023,3,3),
      rawEndDate: new Date(2023,5,30),
      spanLatest: false,
      icon: '<img class="w-8 h-6 text-blue-600 dark:text-blue-400" src="../../../../assets/finnegans-logo.png" alt="">',
    })

    this.mergedData.push({
      title: "Fullstack Developer - Finnegans",
      date: "1 Julio 2023 - Presente",
      desc: "Internship at Finnegans, as a Fullstack developer. Development of a management software; HCM (Human Capital Management).",
      rawStartDate: new Date(2023,6,1),
      rawEndDate: new Date(),
      spanLatest: true,
      icon: '<img class="w-8 h-6 text-blue-600 dark:text-blue-400" src="../../../../assets/finnegans-logo.png" alt="">',
    })

  }



  getOldestDate():Date{
    let oldestDate:Date = this.mergedData[0].rawStartDate;
    this.mergedData.forEach((item:TimelineItem) => {
      if (item.rawStartDate < oldestDate){
        oldestDate = item.rawStartDate;
      }
    })
    return oldestDate;
  }

  getLatestDate():Date{
    let latestDate:Date = this.mergedData[0].rawEndDate;
    this.mergedData.forEach((item:TimelineItem) => {
      if (item.rawEndDate > latestDate){
        latestDate = item.rawEndDate;
      }
    })
    return latestDate;
  }

  getTotalMonths(startDate:Date, endDate:Date):number{
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    return totalMonths;
  }

    //funcion que obtiene el width total en base a la fecha de finalizacion y la fecha de inicio
  getWidth(item:TimelineItem):number{
    const totalWidth = 100;
    const totalMonths = this.getTotalMonths(item.rawStartDate, item.rawEndDate);
    const width = (totalMonths * totalWidth) / this.getTotalMonths(this.getOldestDate(), this.getLatestDate());
    return width;
  }


  getPosition(item: TimelineItem): number {
    const totalWidth = 100;
    const totalMonths = this.getTotalMonths(this.getOldestDate(), this.getLatestDate());
    const startMonths = this.getTotalMonths(this.getOldestDate(), item.rawStartDate);
    const position = (startMonths * totalWidth) / totalMonths;
    return position;
  }

  closeDialog(){
    this.matDialog.closeAll();
  }

}
