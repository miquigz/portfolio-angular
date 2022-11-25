import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SettingsService {

  private darkModeObservablePrivate: BehaviorSubject<boolean> = 
      new BehaviorSubject<boolean>(false);//Object default


  get darkModeObservable():any{
    return this.darkModeObservablePrivate.asObservable();
  }

  set darkModeObservable(value:boolean) {
    this.darkModeObservablePrivate.next(value);
  }


  constructor() { }
}
