import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  @Input() percentage:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
