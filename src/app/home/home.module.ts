import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './pages/layout/layout.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ArrangementModule } from 'ngx-arrangement';
import { NgParticlesModule } from "ng-particles";
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ng-carousel-cdk';


import { HomeRoutingModule } from './home-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PercentageComponent } from './pages/layout/percentage/percentage.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ParticlesComponent } from './pages/perfil/particles/particles.component';
import { CarrouselProjectsComponent } from './pages/projects/carrousel-projects/carrousel-projects.component';
import { NameComponent } from './pages/welcome-animation/name/name.component';
import { WelcomeComponent } from './pages/welcome-animation/welcome/welcome.component';
import { TimelineComponent } from './pages/projects/timeline/timeline.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    NameComponent,
    LayoutComponent,
    ProjectsComponent,
    AboutMeComponent,
    PerfilComponent, 
    PercentageComponent,
    SkillsComponent,
    ParticlesComponent,
    CarrouselProjectsComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    NgParticlesModule,
    NgxScrollTopModule,
    SharedModule,
    CarouselModule,
    ArrangementModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      extend: true
  })
  ]
})
export class HomeModule { }
