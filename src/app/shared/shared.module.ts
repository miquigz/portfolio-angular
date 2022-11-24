import { SafePipe } from './pipes/safe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavItemComponent,
    SafePipe
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
