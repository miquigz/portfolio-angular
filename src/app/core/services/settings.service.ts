import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',//Singleton service
})
export class SettingsService {

  private _darkModeObservablePrivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getDarkModeObservable():Observable<boolean>{
    return this._darkModeObservablePrivate.asObservable();
  }

  set darkModeObservable(value:boolean) {
    this._darkModeObservablePrivate.next(value);
  }

  constructor() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      this._darkModeObservablePrivate.subscribe((value)=>{
        console.log('dark mode browser', value)
      })
      this.darkModeObservable = true;//Ref to darkModeObservable setter
      // this.localS.setData('darkMode', `true`);
      console.log('dark mode browser')
    }else{
      this.darkModeObservable = false;
      // this.localS.setData('darkMode', `false`);
      console.log('light mode browser')
    }
  }
}
