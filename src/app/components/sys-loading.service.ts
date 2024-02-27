import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SysLoadingService {

  private _subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  show(): void {
    this._subject.next(true);
  }

  hide(): void {
    this._subject.next(false);
  }
/*
  setLoading(bool: boolean): void {
    this._subject.next(bool);
  }
*/
  getLoading(): Observable<boolean> {
    return this._subject.asObservable();
  }
}
