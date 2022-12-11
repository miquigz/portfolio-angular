import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
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

  constructor(private route:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.progressBar.nativeElement.classList.add('w-4/12');
      setTimeout(()=>{
        this.progressBar.nativeElement.classList.add('w-7/12');
        setTimeout(()=>{
          this.progressBar.nativeElement.classList.add('w-8/12');
          setTimeout(()=>{
            this.progressBar.nativeElement.classList.add('w-11/12');
            this.progressBar.nativeElement.classList.remove('w-8/12');
            this.progressBar.nativeElement.classList.remove('w-7/12');
            setTimeout(()=>{
              this.progressBar.nativeElement.classList.remove('w-2/12');
              this.progressBar.nativeElement.classList.remove('w-4/12');
              this.progressBar.nativeElement.classList.remove('w-11/12');
              this.progressBar.nativeElement.classList.add('w-full');
            }, 100)
          }, 100)
        }, 200)
      }, 100)
    }, 200)//TODO: REFACTOR ...

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

    // this.btn.nativeElement.classList.add('animate__animated', 'animate__rotateOutUpRight');
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
      this.route.navigateByUrl('/miqueas-gimenez');
    },2000)
  }
}
