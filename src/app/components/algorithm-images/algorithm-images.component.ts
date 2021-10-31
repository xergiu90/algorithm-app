import { Component } from '@angular/core';
import { IAlgorithm } from '../../core/interfaces';
import { AlgorithmService } from '../../core/services';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'algorithm-images',
  templateUrl: './algorithm-images.component.html',
  styleUrls: ['./algorythm-images.component.scss']
})
export class AlgorithmImagesComponent {
  currentAlgorithm: IAlgorithm;

  constructor(
    private algorithmService: AlgorithmService,
    private stateService: StateService
  ) {
    stateService.getCurrentAlgorithm().subscribe(
      algorithmData => {
        this.currentAlgorithm = algorithmData;
      }
    );
  }
}

