import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAlgorithm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentAlgorithm: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
  }

  public getCurrentAlgorithm(): Observable<IAlgorithm> {
    return this.currentAlgorithm.asObservable();
  }

  public setCurrentAlgorithm(algorithm: IAlgorithm) {
    this.currentAlgorithm.next(algorithm);
  }
}
