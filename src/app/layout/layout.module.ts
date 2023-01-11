import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './pages/layout/layout.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrangementModule } from 'ngx-arrangement';

import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PercentageComponent } from './pages/layout/percentage/percentage.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProjectsComponent,
    AboutMeComponent,
    ProjectItemComponent,
    PerfilComponent,
    PercentageComponent
  ],
  imports: [
    CommonModule,
    ArrangementModule,
    LayoutRoutingModule,
    TranslateModule.forChild({
      extend: true
  })
  ]
})
export class LayoutModule { }
