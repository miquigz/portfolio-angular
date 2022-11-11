import { Component} from '@angular/core';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  niebla:boolean = false;

  enComponente(valor:boolean){
    this.niebla = valor;
  }

	constructor() {
    }



}
