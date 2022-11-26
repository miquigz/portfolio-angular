import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrangementModule } from 'ngx-arrangement';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectItemComponent } from './pages/projects/project-item/project-item.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectItemComponent,
    PerfilComponent
  ],exports:[
    HomeComponent //TODO: Quitar esto, RouterOutlet, desImportar en appmodule
  ],
  imports: [
    CommonModule,
    ArrangementModule,
    SharedModule,
    CoreModule
  ]
})
export class LayoutModule { }
