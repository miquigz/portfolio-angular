import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SettingsService {

  private darkModeObservablePrivate: Subject<boolean> = 
      new Subject<boolean>;// default value of darkMode

  get darkModeObservable():any{
    return this.darkModeObservablePrivate.asObservable();
  }

  set darkModeObservable(value:boolean) {
    this.darkModeObservablePrivate.next(value);
  }

  constructor() { }
}
