import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SettingsService } from './services/settings.service';
import { LocalService } from '../shared/services/local.service';

import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SettingsComponent,
    NavItemComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  exports:[
    NavbarComponent,
    SettingsComponent,
    FooterComponent,
    SafePipe
  ],
  providers:[SettingsService, LocalService]
})
export class CoreModule { }
