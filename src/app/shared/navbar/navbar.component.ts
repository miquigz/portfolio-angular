import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { SendMailService } from 'src/app/layout/services/send-mail.service';
import Swal from 'sweetalert2';

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
        animate('920ms', keyframes([
          style({ width: '24.666667%', height:'1.5rem' ,opacity: '0'}), //Offset automatico (omitido)
          style({ width: '34.666667%', height:'2.4rem', opacity: '.2'}),
          style({ width: '40%', height:'2.6rem', opacity: '.4'}),
          style({ width: '50%', height:'2.75rem', opacity: '.9'})
        ]),
        )
      ]),
    ])
  ]
})

export class NavbarComponent{
  isOpen = true;
  mostrar:string = '';
  succesMessage:any = Swal.mixin({
    toast: true,
    position: 'top-end',
    background: 'linear-gradient(93.37deg, #F1F1F1 -6.79%, #ECECEC 107.27%)',
    iconColor:' #ACB6E5',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private mailService:SendMailService) { }

  @ViewChild('menuNav') menu!:ElementRef<HTMLDivElement>;
  
  @Output() selectedSection:EventEmitter<string> = new EventEmitter();

  toggle():void{
    this.isOpen = !this.isOpen;
    this.animateClickMenu(this.isOpen);
  }

  mouseEnter(sectionAct:string):void{
    this.mostrar = sectionAct;
  }

  mouseLeave():void{
    this.mostrar = '';
  }
  
  successDownload(){
    this.succesMessage.fire({
      icon: 'success',
      title: 'Descargando CV!'
    })
  }

  animateClickMenu(openClose:boolean):void{
    if(openClose){
      this.menu.nativeElement.classList.add("animate__jello")
    }else{
      this.menu.nativeElement.classList.remove("animate__jello")
      this.menu.nativeElement.classList.add("animate__rubberBand")
    }
  }

  emitSection(section:string):void{
    this.selectedSection.emit(section);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(!this.isOpen && window.innerWidth < 1025){
      this.isOpen = true;
    }
  }

  openFormMail():void{
    this.mailService.openForm();
  }

}