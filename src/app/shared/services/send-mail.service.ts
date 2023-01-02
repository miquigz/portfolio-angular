import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  private endPoint:string = "https://api.emailjs.com/api/v1.0/email/send";
  private serviceID:string = 'service_k1g0e4c';
  private templateID: string = 'template_7u1yr9k';
  private userID:string = 'qBNUm7nhPvMF8_4z-';
  

  constructor(private http: HttpClient, private translate:TranslateService) { }

  sendMail(formValues:string[]){

    const mailData = JSON.stringify({
      service_id: this.serviceID,
      template_id: this.templateID,
      user_id: this.userID,
      template_params:{
        name:formValues[0],
        lastname:formValues[1],
        email:formValues[2],
        subject:formValues[3],
        message:formValues[4]
      }  
    });
    // console.log(mailData);

    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'POST');

    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    
    // console.log(headers);
    this.http.post<any>(this.endPoint, mailData, { headers: headers} )
    .subscribe({
        next: data => {
            console.log("Success Post", data);
        },
        error: error => {
            console.log(headers);
            console.error('Error in sendMail Post', error);
            console.log('--');
            console.log(JSON.stringify(error));
        }
    });
  }

  openForm(){
    
    //IFEE to fire the Swal form
    (async () =>{
      //Translation form 
      const actions = {
        confirm: 'Send',
        cancel: 'Cancel'
      }

      let titleForm = 'Send Mail';
      const place = {
        name: 'Name',
        lastname: 'Last Name',
        email: 'Email',
        subject: 'Subject',
        body: 'Body of the email'
      }

      if (this.translate.currentLang === 'es'){
        titleForm = 'Enviarme un Correo'; place.name = 'Nombre';
        place.lastname = 'Apellido'; place.email = 'Correo';
        place.subject = 'Asunto del correo'; place.body = 'Cuerpo del correo';
        actions.confirm = 'Enviar'; actions.cancel = 'Cancelar';
      }


      const { value: formValues } = await Swal.fire({
        title: `${titleForm}`,
        background: '#EFEDEF',
        showClass: {
          popup: 'animate__animated animate__fadeInDown animate__fast'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown animate__faster'
        },
        cancelButtonText:`${actions.cancel}`,
        cancelButtonColor:'#b6aab1',
        confirmButtonColor: '#ACB6E5',
        confirmButtonText:`${actions.confirm}`,
        html:
        `<div class="flex justify-center items-center flex-col">
          <input id="swal-input1" maxlength="24" type="text" placeholder="${place.name}" class="minimalist-input">
          <input id="swal-input2" maxlength="24" type="text" placeholder="${place.lastname}" class="minimalist-input">
          <input id="swal-input3" type="email" placeholder="${place.email}" class="minimalist-input">
          <input id="swal-input4" placeholder="${place.subject}" class="minimalist-input">
          <textarea id="swal-input5" placeholder="${place.body}" class="minimalist-textarea"></textarea>
        </div>`,//TODO: Generar msj de warnings en inputs con ngForm
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          return [
            (<HTMLInputElement>document.getElementById('swal-input1')).value,
            (<HTMLInputElement>document.getElementById('swal-input2')).value,
            (<HTMLInputElement>document.getElementById('swal-input3')).value,
            (<HTMLInputElement>document.getElementById('swal-input4')).value,
            (<HTMLInputElement>document.getElementById('swal-input5')).value,
          ]
        }
      })

      if (formValues !== undefined){
        const errs = this.validarDatos(formValues!);
        // console.log(errs.length);

        if(errs.length === 0){
          //mostrar envio exitoso
          this.sendMail(formValues!);
          Swal.fire('Email enviado con Éxito!', `Gracias ${formValues![0]} por contactarte! :)`);
        }else{
          let text = ' ';
          errs.forEach((ele)=> text= text +  ele + ',\n' );
          Swal.fire('Datos Incorrectos: \n', text);
        }
      }
    })();
  }

  validarDatos(values:string[]):string[]{
    const errorsList:string[] = [];
    let voidArray:boolean = true;
    values!.forEach((ele)=>{if(ele !== '') voidArray = false;});
    // console.log(voidArray);
    if(!voidArray){
        if(values[0].length < 3)
          errorsList.push('Nombre demasiado corto');
        if(values[1].length < 4)
          errorsList.push('Apellido demasiado corto');
        if (!(values[2].includes('@')) && values![2].length < 8)
          errorsList.push('Email Invalido');
        if((values[3]).length < 6)
          errorsList.push('Campo "Asunto" cuenta con menos de 6 caracteres');
        if((values[3]).length < 15)
          errorsList.push('Cuerpo del correo cuenta con menos de 15 caracteres');
    }else{
      errorsList.push('Sin campos llenados del formulario.');
    }
    return errorsList
  }

}


    // const body = {
    //   name: formValues[0],
    //   lastName: formValues[1],
    //   email: formValues[2],
    //   _subject: formValues[3],
    //   message: formValues[4]
    // }



  // (async ()=>{
  //   const { value: email } = await Swal.fire({
  //     title: 'Input email address',
  //     input: 'email',
  //     inputLabel: 'Your email address',
  //     inputPlaceholder: 'Enter your email address'
  //   })
  //   if (email) {
  //     Swal.fire(`Entered email: ${email}`)
  //   }
  // })(); //IIFE function autoejecutable


