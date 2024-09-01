import { Injectable } from '@angular/core';

import { SocialSVG } from './../interfaces/social-svg';
//constants svgs
import { SVG_DISCORD } from '../constants/profile-svgs/svg-discord.constant';
import { SVG_LINKEDIN } from './../constants/profile-svgs/svg-linkedin.constant';
import { SVG_GITHUB } from '../constants/profile-svgs/svg-github.constant';
import { SVG_INSTAGRAM } from '../constants/profile-svgs/svg-instagram.constant';

@Injectable({
  providedIn: 'root'
})
export class SvgsProfileService {

  private _profileSvgs:SocialSVG[] = [
    {
      svg: SVG_GITHUB,
      userId: "miquigz",
      href: "https://github.com/miquigz"
    },
    {
      svg: SVG_INSTAGRAM,
      userId: "miquigz",
      href: ""
    },
    {
      svg: SVG_DISCORD,
      userId: "miquigz",
      href: ""
    },
    {
      svg: SVG_LINKEDIN,
      userId: "miqueasgimenez",
      href: "https://www.linkedin.com/in/miqueasgimenez/"
    }
  ]

  constructor() { }

  getAllSvgs():SocialSVG[]{
    return [... this._profileSvgs];
  }

  getSvg(index:number):SocialSVG{
    if (index >= 0 && index < this._profileSvgs.length) {
      return {...this._profileSvgs[index]};
    }else{
      console.log("Index out of range");
      return {...this._profileSvgs[0]};
    }
  }
}
