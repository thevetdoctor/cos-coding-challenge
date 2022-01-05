import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  private statesubject = new Subject();

  sendUpdate(message: string) {
    this.statesubject.next({ text: message})
  }

  getUpdate(): Observable<any>{
    return this.statesubject.asObservable()
  }
}
