import { Component, OnInit } from '@angular/core';
// import { Swal } from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';
import { SendMailService } from '../../services/send-mail.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`.animate-button-download:hover{
      animation: pulse;
      animation-duration: .6s;
      background-color: #ACB6E5;
      opacity: .8;
      transition: .7s;
    }h2{
      font-family: "Oswald", sans-serif;
      letter-spacing: .2rem;
    }`]
})
export class AboutMeComponent implements OnInit {
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

  ngOnInit():void {
  }


  successDownload(){
    this.succesMessage.fire({
      icon: 'success',
      title: 'Descargando CV!'
    })
  }

  openFormMail():void{
    this.mailService.openForm();
  }
}
