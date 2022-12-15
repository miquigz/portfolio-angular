import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NameComponent implements OnInit{
  @Input('continuar') continuar:boolean = false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
