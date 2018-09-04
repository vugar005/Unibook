import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceLearningComponent } from './distance-learning.component';
import { DistanceLearningRoutes } from './distance-learning.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [
    CommonModule,
    DistanceLearningRoutes,
    MatButtonToggleModule,
    FontAwesomeModule
  ],
  declarations: [DistanceLearningComponent]
})
export class DistanceLearningModule { }
