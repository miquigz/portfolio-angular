import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(value: string):SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
