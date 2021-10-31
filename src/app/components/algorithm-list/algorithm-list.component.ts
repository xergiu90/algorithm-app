import { Component } from '@angular/core';
import { IAlgorithm } from '../../core/interfaces';
import { AlgorithmService } from '../../core/services';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'algorithm-list',
  templateUrl: './algorithm-list.component.html',
  styleUrls: ['./algorythm-list.component.scss']
})
export class AlgorithmListComponent {
  displayedColumns: string[] = ['name', 'action', 'status', 'host', 'progress'];
  dataSource:any;
  currentAlgorithm:IAlgorithm;

  constructor(
    private algorithmService: AlgorithmService,
    private stateService: StateService
  ) {
    algorithmService.getAlgorithmList().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }


  getAlgorithmDetails(algorithm:IAlgorithm) {
    if(this.currentAlgorithm) {
      this.currentAlgorithm.selected = false;
    }

    algorithm.selected= true;
    this.currentAlgorithm = algorithm;
    this.stateService.setCurrentAlgorithm(algorithm);
  }
}

