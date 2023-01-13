import { SvgsSkillsService } from './../../services/svgs-skills.service';
import { SkillsSVG } from './../../interfaces/skills-svg';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None//para capturar styles innerHTML svg
})
export class SkillsComponent implements OnInit {

  backItems:SkillsSVG[] = [];
  frontItems:SkillsSVG[] = [];
  toolsItems:SkillsSVG[] = [];

  hoverItems:boolean[][] = [[]];

  constructor(private svgsSkills:SvgsSkillsService) { }

  ngOnInit(): void {
    this.backItems = this.svgsSkills.getBackItems();
    this.frontItems = this.svgsSkills.getFrontItems();
    this.toolsItems = this.svgsSkills.getToolsItems();

    this.hoverItems = [
      new Array(this.backItems.length).fill(false),
      new Array(this.frontItems.length).fill(false),
      new Array(this.toolsItems.length).fill(false)
    ];

    // this.hoverSection = new Array(3).fill(false);

    console.log(this.hoverItems);
  }

  offHoverSvg(index:number, section:number){
    this.hoverItems[section][index] = false;
  }

  onHoverSvg(index:number, section:number){
    this.hoverItems[section][index] = true;
  }

  // onHoverSection(num:number){
  //   this.hoverSection[num] = true;
  // }

  // offHoverSection(num:number){
  //   this.hoverSection[num] = false;
  // }

}
