import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowWelcomeService {

  private _hideWelcome:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getHideWelcome():Observable<boolean>{
    return this._hideWelcome.asObservable();
  }

  setHideWelcome(value:boolean):void{
    this._hideWelcome.next(value);
  }
}
