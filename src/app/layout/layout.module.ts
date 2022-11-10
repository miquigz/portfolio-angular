import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent
  ],exports:[
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
