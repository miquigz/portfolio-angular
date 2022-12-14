import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [`
      h1{
      font-family: 'Oswald', sans-serif; letter-spacing: 1rem;
      background: #ACB6E5;
      background: linear-gradient(to bottom left, #ACB6E5 19%, #C9D6FF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;}
    p{
      font-family: 'Oswald', sans-serif;
      letter-spacing: .5rem;}`
  ]
})
export class PerfilComponent {

  constructor() { }

}
