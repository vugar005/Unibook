import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceLearningComponent } from './distance-learning.component';
import { DistanceLearningRoutes } from './distance-learning.routing';

@NgModule({
  imports: [
    CommonModule,
    DistanceLearningRoutes,
    MatButtonToggleModule
  ],
  declarations: [DistanceLearningComponent]
})
export class DistanceLearningModule { }
