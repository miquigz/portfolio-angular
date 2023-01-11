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
  }
}
