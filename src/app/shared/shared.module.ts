import { CoreModule } from './../core/core.module';
import { SafePipe } from './pipes/safe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { SettingsComponent } from './navbar/settings/settings.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavItemComponent,
    SafePipe,
    SettingsComponent
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreModule //TODO: Remove this, migrar nav,footer al core.
  ]
})
export class SharedModule { }
