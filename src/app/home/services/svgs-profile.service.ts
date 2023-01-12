import { SocialSVG } from './../interfaces/social-svg';
import { SVG_LINKEDIN } from './../constants/svg-linkedin.constant';
import { SVG_DISCORD } from './../constants/svg-discord.constant';
import { Injectable } from '@angular/core';
import { SVG_GITHUB } from '../constants/svg-github.constant';
import { SVG_INSTAGRAM } from '../constants/svg-instagram.constant';

@Injectable({
  providedIn: 'root'
})
export class SvgsProfileService {

  private _profileSvgs:SocialSVG[] = [
    {
      svg: SVG_GITHUB,
      userId: "miquigz",
      href: ""
    },
    {
      svg: SVG_INSTAGRAM,
      userId: "miquigz",
      href: ""
    },
    {
      svg: SVG_DISCORD,
      userId: "Miqui#1181",
      href: ""
    },
    {
      svg: SVG_LINKEDIN,
      userId: "miqueasgimenez",
      href: ""
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
