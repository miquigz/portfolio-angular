import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './pages/layout/layout.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArrangementModule } from 'ngx-arrangement';

import { HomeRoutingModule } from './home-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PercentageComponent } from './pages/layout/percentage/percentage.component';
import { SkillsComponent } from './pages/skills/skills.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProjectsComponent,
    AboutMeComponent,
    ProjectItemComponent,
    PerfilComponent,
    PercentageComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArrangementModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      extend: true
  })
  ]
})
export class HomeModule { }