import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from './sanitize.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeHtmlPipe
  ],
  declarations: [
    SanitizeHtmlPipe
  ]
})
export class PipesModule {
}
