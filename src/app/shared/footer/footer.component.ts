import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerClass:string = 'w-full h-16 flex justify-center transparent-background pb-8 pt-4 items-center z-50';

  constructor() { }

  ngOnInit(): void {
  }

}
