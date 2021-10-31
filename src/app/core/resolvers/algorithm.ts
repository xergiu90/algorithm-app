import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IAlgorithm } from '../interfaces';
import { AlgorithmService } from '../services';

@Injectable({ providedIn: 'root' })
export class Algorithm implements Resolve<IAlgorithm> {
  constructor(private algorithmService: AlgorithmService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IAlgorithm> | any {
      return this.algorithmService.getAlgorithmList();
  }
}
