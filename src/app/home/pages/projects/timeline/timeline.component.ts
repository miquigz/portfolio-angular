import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() title:string = '';
  @Input() date:string = '';
  @Input() desc:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
