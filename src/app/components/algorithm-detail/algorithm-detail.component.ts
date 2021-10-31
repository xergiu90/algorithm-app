import { Component } from '@angular/core';
import { IAlgorithm, IAlgorithmDetails } from '../../core/interfaces';
import { AlgorithmService } from '../../core/services';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorythm-detail.component.scss']
})
export class AlgorithmDetailComponent {
  currentAlgorithmDetails: IAlgorithmDetails;

  constructor(
    private algorithmService: AlgorithmService,
    private stateService: StateService
  ) {
    stateService.getCurrentAlgorithm().subscribe(
      algorithmData => {
        if(algorithmData) {
          this.algorithmService.getAlgorithm(algorithmData.algorithm).subscribe(
            algorithm => {
              this.currentAlgorithmDetails = algorithm;
            }
          );
        }
      }
    );
  }
}

