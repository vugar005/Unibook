import { DistanceLearningComponent } from './distance-learning.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DistanceLearningComponent}
];

export const DistanceLearningRoutes = RouterModule.forChild(routes);
