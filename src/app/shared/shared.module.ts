import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
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
