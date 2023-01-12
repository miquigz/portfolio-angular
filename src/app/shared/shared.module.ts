import { NgModule } from '@angular/core';

import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    SafeHTMLPipe
  ],
  exports:[
    SafeHTMLPipe
  ]
})
export class SharedModule { }
