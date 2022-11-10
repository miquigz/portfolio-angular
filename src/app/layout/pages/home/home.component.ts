import { Component} from '@angular/core';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`h1{
    font-family: 'Oswald', sans-serif; letter-spacing: 1rem;
    background: #ACB6E5;
    background: linear-gradient(to bottom left, #ACB6E5 19%, #C9D6FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }`]
})
export class HomeComponent{

	constructor() {
    }



}
