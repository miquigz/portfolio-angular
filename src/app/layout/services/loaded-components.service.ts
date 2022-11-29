import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadedComponentsService {

  // *ngIf="loadedComponents(item)"

  private loadedProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//Object default
  private loadedAbout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);//Object default

  private clickedElement: BehaviorSubject<string> = new BehaviorSubject<string>('');//Object default

//Projects
  get loadedProjectsObservable():any{
    return this.loadedProjects.asObservable();
  }
  set loadedProjectsObservable(value:boolean) {
    this.loadedProjects.next(value);
  }
//About
  get loadedAboutObservable():any{
    return this.loadedAbout.asObservable();
  }
  set loadedAboutObservable(value:boolean) {
    this.loadedAbout.next(value);
  }
//Element Clicked:
  get clickedElementObservable():any{
    return this.clickedElement.asObservable();
  }
  set clickedElementObservable(value:string) {
    this.clickedElement.next(value);
  }

  constructor() { }
}
