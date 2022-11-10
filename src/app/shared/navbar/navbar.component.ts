import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

// style({
//   opacity: 1,
//   width: '66.666667%',
//   height: '50px'
// })

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({})),
      state('closed', style({
        height: '0px',
        width: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('.8s')
      ]),
      transition('closed => open', [
        animate('1020ms', keyframes([
          style({ width: '24.666667%', height:'1.5rem' ,opacity: '0'}), //Offset automatico (omitido)
          style({ width: '34.666667%', height:'2.4rem', opacity: '.2'}),
          style({ width: '54.666667%', height:'2.6rem', opacity: '.4'}),
          style({ width: '66.666667%', height:'3rem', opacity: '.9'})
        ]),
        )
      ]),
    ])
  ]
})

export class NavbarComponent implements OnInit {

  constructor() { }

  @ViewChild('menuNav') menu!:ElementRef<HTMLDivElement>;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.menu.nativeElement.classList);
  }

  // animation: jello;
  // animation-duration: .9s;

  ngOnInit(): void {
  }

}

// trigger('openClose', [
//   state('open', style({
//     height: '100px',
//     width: '100px',
//     display: 'fixed',
//     opacity: 1
//   })),
//   state('closed', style({
//     height: '10px',
//     width: '10px',
//     opacity: 0.8
//   })),
//   transition('open => closed', [
//     animate('.8s')
//   ]),
//   transition('closed => open', [
//     sequence([
//       animate('100ms', style({
//         opacity: 1,
//         height: '300px'
//       })),
//       style({ opacity: 1 }),
//       animate("1s", style({ opacity: 1 }))
//     ])
//   ]),
//   // transition('closed => open', [
//   //   animate('0.5s')
//   // ])
// ]),

// transition('open => closed', [
//   sequence([
//     animate('500ms', style({
//         opacity: 0,
//         height: '5px'
//       })),
//       style({ opacity: 0 }),
//       animate('1000ms', style({
//         opacity: .8,
//         height: '0px'
//       }))
//     ])         
//   ]),
//   transition('closed => open', [
//     sequence([
//       animate('500ms', style({
//           opacity: .3,
//           height: '125px'
//         })),
//         animate('3000ms', style({
//           opacity: 1,
//           height: '300px'
//         }))
//       ])         
//     ])
// ]),