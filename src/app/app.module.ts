import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlgorithmDetailComponent } from './components/algorithm-detail/algorithm-detail.component';
import { AlgorithmImagesComponent } from './components/algorithm-images/algorithm-images.component';
import { AlgorithmListComponent } from './components/algorithm-list/algorithm-list.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmListComponent,
    AlgorithmDetailComponent,
    AlgorithmImagesComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
