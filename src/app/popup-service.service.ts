import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupServiceService {
  private type = new BehaviorSubject('');
  typeVal = this.type.asObservable();
  constructor() { }
  changeType(val:any){
    this.type.next(val);
  }
  
}
