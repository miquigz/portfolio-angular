import { SendMailService } from 'src/app/layout/services/send-mail.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import Swal from 'sweetalert2';

import { NavItem } from '../../interfaces/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
  encapsulation: ViewEncapsulation.None//para capturar styles innerHTML svg
})
export class NavItemComponent implements OnInit {

  @Input() item!:NavItem;

  @Output() selectedSection:EventEmitter<string> = new EventEmitter();
  linkToComponent: boolean = false;
  cvItem:boolean = false;

  constructor(private mailService:SendMailService) { 
  }
  ngOnInit(): void {
    this.linkToComponent = this.item.name === 'perfil' 
      || this.item.name === 'projects' 
      || this.item.name === 'about';
  }

  successDownload(){
    this.succesMessage.fire({
      icon: 'success',
      title: 'Descargando CV!'
    })
  }

//Smooth Click, scroll to section
  emitSection(section:string):void{
    if (this.linkToComponent){
      this.selectedSection.emit(section);
    }
  }

  //SendMail navItem
  openFormMail():void{
    this.mailService.openForm();
  }

  //SPAN methods
  mostrar:string = '';
  mouseEnter(sectionAct:string):void{
    this.mostrar = sectionAct;
  }

  mouseLeave():void{
    this.mostrar = '';
  }
//Success Sweet Alert config
  succesMessage:any = Swal.mixin({
    toast: true,
    position: 'top-end',
    background: 'linear-gradient(93.37deg, #F1F1F1 -6.79%, #ECECEC 107.27%)',
    iconColor:' #ACB6E5',
    showConfirmButton: false,
    timer: 2800,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}
