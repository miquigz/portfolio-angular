import { Observable } from 'rxjs';
import { ShowWelcomeService } from './../../../services/show-welcome.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit, OnDestroy{

  continuar:boolean = false;
  @ViewChild('btnContinuar') btn!:ElementRef<HTMLDivElement>;
  @ViewChild('btnText') btnText!:ElementRef<HTMLParagraphElement>;
  @ViewChild('textWelcome') textWelcome!:ElementRef<HTMLParagraphElement>;
  @ViewChild('progressBar') progressBar!:ElementRef<HTMLDivElement>;
  
  @ViewChild('name') name!:ElementRef<HTMLTitleElement>;

  showMessage:boolean = false;
  

  private interval:any;

  constructor(
    private showWelcome:ShowWelcomeService
    ) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.showMessage = true;
      this.interval = setInterval(() => {
        if(this.btn.nativeElement.classList.contains('animate__jello')){
          this.btn.nativeElement.classList.remove('animate__jello');
          if(!this.continuar)
            this.btnText.nativeElement.classList.add('animate__pulse')
      }else{
          this.btn.nativeElement.classList.add('animate__jello');
          if(!this.continuar)
            this.btnText.nativeElement.classList.remove('animate__pulse')
        }
      }, 2000);
    }, 900);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  clicked(){
    this.continuar = true;
    this.btn.nativeElement.classList.remove('animate__swing');
    this.textWelcome.nativeElement.classList.add('animate__animated', 'animate__fast','animate__fadeOut');
    this.name.nativeElement.classList.add('animate__animated', 'animate__fast','animate__fadeOut');
    setTimeout(()=>{
      this.btn.nativeElement.classList.add('animate__rotateOut');
      this.btnText.nativeElement.classList.add('animate__rollOut');
    }, 50)
    setTimeout(()=>{
      // this.route.navigateByUrl('/miqueas-gimenez');
      this.showWelcome.setHideWelcome(true);
    },2000)
  }
}
