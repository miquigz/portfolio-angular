import { FRONT_SVGS } from './../constants/skills-svg/front-svg.constants';
import { BACKEND_SVGS } from './../constants/skills-svg/back-svg.constants';

import { SkillsSVG } from './../interfaces/skills-svg';
import { Injectable } from '@angular/core';
import { TOOLS_SVG } from '../constants/skills-svg/tools-svg.constants';

@Injectable({
  providedIn: 'root'
})
export class SvgsSkillsService {

  private back_svgs:SkillsSVG[] = [];
  private front_svgs:SkillsSVG[] = [];
  private tools_svgs:SkillsSVG[] = [];

  constructor() { 
    this.front_svgs = [
      {
        name: 'Angular',
        svg: FRONT_SVGS.angular
      },
      {
        name: 'TypeScript',
        svg: FRONT_SVGS.typescript
      },
      {
        name: 'JavaScript',
        svg: FRONT_SVGS.js
      },
      {
        name: 'RxJS',
        svg: FRONT_SVGS.rxjs
      },
      {
        name: 'Sass',
        svg: FRONT_SVGS.sass
      },
      {
        name: 'CSS',
        svg: FRONT_SVGS.css
      },
      {
        name: 'TailwindCSS',
        svg: FRONT_SVGS.tailwind
      },
      {
        name: 'Bootstrap',
        svg: FRONT_SVGS.bootstrap
      },
      {
        name: 'webpack',
        svg: FRONT_SVGS.webpack
      }
    ];

    this.tools_svgs = [
      {
        name:'Git',
        svg: TOOLS_SVG.git
      },
      // TODO: Poner npm y yarn
      //{
      //   'name': 'npm',
      //   svg: TOOLS_SVG.npm
      // },
      // {
      //   'name': 'yarn',
      //   svg: TOOLS_SVG.yarn
      // }
      {
        name: 'Postman',
        svg: TOOLS_SVG.postman
      },
      {
        name: 'Adobe Indesign',
        svg: TOOLS_SVG.adobeIndesign
      },
      {
        name: 'A. Illustrator',
        svg: TOOLS_SVG.adobeIllustrator
      },
      {
        name: 'A. Lightroom',
        svg: TOOLS_SVG.adobeLightroom
      },
      {
        name: 'Karma',
        svg: TOOLS_SVG.karma
      },
      {
        name: 'Jasmine',
        svg: TOOLS_SVG.jasmine
      }


    ]

    this.back_svgs = [
      {
        name: 'NodeJS',
        svg: BACKEND_SVGS.nodejsGradient
      },
      {
        name: 'ExpressJS',
        svg: BACKEND_SVGS.expressjs
      },
      {
        name: 'MongoDB',
        svg: BACKEND_SVGS.mongodb
      },
      {
        name: 'MySQL',
        svg: BACKEND_SVGS.mysql
      },
      {
        name: 'handlebars',
        svg: BACKEND_SVGS.handlebarsGradient
      },
      {
        name: 'firestore',
        svg: BACKEND_SVGS.firestoreColor
      },
      {
        name: 'NestJS',
        svg: BACKEND_SVGS.nestjs
      },
      {
        name: 'MariaDB',
        svg: BACKEND_SVGS.mariadbColor
      }
    ]
  }


  getBackItems():SkillsSVG[] {
    return [... this.back_svgs];
  }

  getFrontItems():SkillsSVG[] {
    return [... this.front_svgs];
  }

  getToolsItems():SkillsSVG[] {
    return [... this.tools_svgs];
  }
  
}
