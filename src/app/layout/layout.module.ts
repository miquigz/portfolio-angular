
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrangementModule } from 'ngx-arrangement';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectItemComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ArrangementModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
