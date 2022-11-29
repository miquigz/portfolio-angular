import { SafePipe } from './pipes/safe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SafePipe
  ],
  exports:[
    SafePipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
