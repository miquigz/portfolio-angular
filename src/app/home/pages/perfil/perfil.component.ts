import { SvgsProfileService } from './../../services/svgs-profile.service';
import { SocialSVG } from './../../interfaces/social-svg';
import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { SVG_DISCORD } from '../../constants/profile-svgs/svg-discord.constant';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  //TODO: Hacer array
  svgDC = SVG_DISCORD;

  link:boolean[] = [false, false, false, false];
  socialItems:SocialSVG[] = [];

  constructor(svgsProfileService:SvgsProfileService) {
    this.socialItems = svgsProfileService.getAllSvgs();
  }

  showLink(num:number){
    this.link[num] = true;
  }

  hideLink(num:number){
    this.link[num] = false;
  }

  copyId(id:string, copyText:string){
    let textId:string = id;
    console.log(textId);
    
    navigator.clipboard.writeText(textId);
  
    this.succesMessage.fire({
      icon: 'success',
      title: `${copyText} username copied!`
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
}
