import { SvgsProfileService } from './../../services/svgs-profile.service';
import { SocialSVG } from './../../interfaces/social-svg';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { SVG_DISCORD } from '../../constants/profile-svgs/svg-discord.constant';
import { timer, first } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PerfilComponent implements OnInit {

  //TODO: Hacer array
  svgDC = SVG_DISCORD;

  private cargos: string[] = ['Fullstack', 'Frontend', 'Backend'];
  private actualIndex:number = 0;

  descDinamic:string = '';
  
  link:boolean[] = [false, false, false, false];
  socialItems:SocialSVG[] = [];

  constructor(svgsProfileService:SvgsProfileService) {
    this.socialItems = svgsProfileService.getAllSvgs();
  }

  ngOnInit(): void {
    this.showName(this.cargos[this.actualIndex]);
  }

  showLink(num:number){
    if (window.innerWidth > 680){//TODO: Evento de resize? si hace falta
      this.link[num] = true;
    }
  }

  hideLink(num:number){
    this.link[num] = false;
  }

  copyId(id:string, index:number){
    const text:string[] = ['Instagram', 'Discord'];

    let textId:string = id;
    console.log(textId);
    
    navigator.clipboard.writeText(textId);
  
    this.succesMessage.fire({
      icon: 'success',
      title: `${text[index - 1]} username copied!`
    })
  
  }

  succesMessage:any = Swal.mixin({
    toast: true,
    position: 'top',
    background: 'linear-gradient(93.37deg, #F1F1F1 -6.79%, #ECECEC 107.27%)',
    iconColor:' #ACB6E5',
    customClass: 'md:mt-16 mt-10',
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  showName(name:string){
    const nameArray = name.split('');
    for(let i = 0; i < nameArray.length; i++){
      let time = 100 * i;
      timer(time)
      .pipe(first())
      .subscribe(() => {
        this.descDinamic += nameArray[i];
      });
    }

    timer(100 * nameArray.length + 4000)
    .pipe(first())
    .subscribe(() => {
      this.hideName();
    });
  }

  hideName(){
    const maxActual = this.descDinamic.length;
    for(let i = maxActual - 1; i >= 0; i--) {
      let time = 100 * i;
      timer(time)
      .pipe(first())
      .subscribe(() => {
        this.descDinamic = this.descDinamic.slice(0, -1);
        if( i === maxActual - 1 ){
          this.actualIndex++;
          if(this.actualIndex === this.cargos.length){
            this.actualIndex = 0;
          }
          timer(1000).pipe(first())
          .subscribe(() => { this.showName(this.cargos[this.actualIndex]); });
        }

      });
    }
  }
}
