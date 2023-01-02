import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    TranslateModule.forChild({
      extend: true
    })
  ]
})
export class InfoModule { }
