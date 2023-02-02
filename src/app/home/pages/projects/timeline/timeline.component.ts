import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from 'src/app/home/interfaces/timeline-item';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  //TODO: Required decorator
  @Input() item!:TimelineItem;

  constructor() { }

  ngOnInit(): void {
  }

}
