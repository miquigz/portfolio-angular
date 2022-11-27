import { Injectable } from '@angular/core';

import { NavItem } from '../interfaces/nav-item';
//constants svgs
import { SVG_HOME } from '../../core/constants/svg-home.constant';
import { SVG_GITHUB } from '../../core/constants/svg-github.constant';
import { SVG_LINKEDIN } from '../../core/constants/svg-linkedin.constant';
import { SVG_CV } from '../../core/constants/svg-cv.constant';
import { SVG_CONTACT } from '../../core/constants/svg-contact.constant';
import { SVG_ABOUT } from '../../core/constants/svg-about.constant';
import { SVG_PROJECTS } from '../../core/constants/svg-projects.constant';

@Injectable({
  providedIn: 'root'
})
export class SvgsService {
//Data
  navItems:NavItem[] = [
    {
      svgHTML: SVG_HOME,
      name: 'perfil',
      spanDesc:'Inicio',
      href: ''
    },
    {
      svgHTML: SVG_PROJECTS,
      name: 'projects',
      spanDesc:'Proyectos',
      href: ''
    },
    {
      svgHTML: SVG_ABOUT,
      name: 'about',
      spanDesc:'Sobre mí',
      href: ''
    },
    {
      svgHTML: SVG_CONTACT,
      name: 'contact',
      spanDesc:'Contactame',
      href: ''
    },
    {
      svgHTML: SVG_CV,
      name: 'cv',
      spanDesc:'Descargar CV',
      href: './../../../assets/CV.pdf'
    },
    {
      svgHTML: SVG_LINKEDIN,
      name: 'linkedin',
      spanDesc:'Linkedin',
      href: 'https://www.linkedin.com/in/miqueasgimenez/'
    },
    {
      svgHTML: SVG_GITHUB,
      name: 'github',
      spanDesc:'Github',
      href: 'https://github.com/miquigz'
    }
  ]
  
  constructor() { }

  getAllItems():NavItem[]{
    return [... this.navItems];
  }

  getItem(index:number):NavItem{
    if (index >= 0 && index < this.navItems.length) {
      return { ... this.navItems[index] };
    }else{
      console.log("Index out of range");
      return { ... this.navItems[0] };
    }
    
  }

  

}
