import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {

  setData(key:any, data:string) {
    // const jsonData = JSON.stringify(data)
    localStorage.setItem(key, data)
  }
  
  getData(key:string) {
    return localStorage.getItem(key)
  }
  
  removeData(key:string) {
    localStorage.removeItem(key)
  }

  constructor() { }
}
