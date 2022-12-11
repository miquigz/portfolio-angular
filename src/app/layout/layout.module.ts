import { LayoutComponent } from './pages/layout/layout.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrangementModule } from 'ngx-arrangement';

import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    ProjectsComponent,
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
