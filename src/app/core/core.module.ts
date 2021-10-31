import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { HttpService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    PipesModule
  ],
  declarations: [
  ],
  providers: [
    HttpService,
  ]
})
export class CoreModule {
}
