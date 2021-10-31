import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { IAlgorithm, IAlgorithmDetails } from './core/interfaces';
import { AlgorithmService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor(private algorithmService: AlgorithmService) {

  }


}
