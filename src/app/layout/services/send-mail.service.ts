import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Swal from 'sweetalert2';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  //https://rapidprod-sendgrid-v1.p.rapidapi.com
  private endPoint:string = "https://api.emailjs.com/api/v1.0/email/send";
  private serviceID:string = 'service_k1g0e4c';
  private templateID: string = 'template_7u1yr9k';
  private userID:string = 'qBNUm7nhPvMF8_4z-';
  

  constructor(private http: HttpClient) { }

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
    (async () =>{
      const { value: formValues } = await Swal.fire({
        title: 'Enviarme un Correo',
        background: '#EFEDEF',
        cancelButtonText:'Cancelar',
        cancelButtonColor:'#b6aab1',
        confirmButtonColor: '#ACB6E5',
        confirmButtonText:'Enviar',
        html:
        `<div class="flex justify-center items-center flex-col">
          <input id="swal-input1" maxlength="24" type="text" placeholder="Nombre" class="h-10 mb-1 sm:h-14 sm:w-8/12 w-full bg-common p-2 text-indigo-400 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:transition focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
          <input id="swal-input2" maxlength="24" type="text" placeholder="Apellido" class="h-10 mb-1 sm:h-14 sm:w-8/12 w-full bg-common p-2 text-indigo-400 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:transition focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
          <input id="swal-input3" type="email" placeholder="Email" class="h-10 mb-1 sm:h-14 sm:w-8/12 w-full bg-common p-2 text-indigo-400 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:transition focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
          <input id="swal-input4" placeholder="Asunto del Email" class="h-10 mb-1 sm:h-14 sm:w-8/12 w-full bg-common p-2 text-indigo-400 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:transition focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
          <textarea id="swal-input5" placeholder="Cuerpo del correo" class="h-18 mb-1 sm:h-24 sm:w-8/12 w-full bg-common p-2 text-indigo-400 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:transition focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"></textarea>
        </div>`,
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


