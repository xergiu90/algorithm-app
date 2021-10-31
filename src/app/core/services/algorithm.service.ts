import { Injectable } from '@angular/core';
import { API_ROUTES } from '../configurations/configuration';
import { IAlgorithm, IAlgorithmDetails } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmService {

  constructor(
    private httpService: HttpService,
  ) {
  }

  public getAlgorithmList(): Observable<IAlgorithm> {
    return this.httpService.get(API_ROUTES.algorithmList);
  }

  public getAlgorithm(algorithmName: string): Observable<IAlgorithmDetails> {
    return this.httpService.get(API_ROUTES.algorithm + algorithmName);
  }
}
