import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassToggleDirective } from './class-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClassToggleDirective],
  exports: [ClassToggleDirective]
})
export class SharedModule { }
