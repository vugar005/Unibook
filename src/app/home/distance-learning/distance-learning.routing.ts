import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { DistanceLearningComponent } from './distance-learning.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path: '', component: DistanceLearningComponent, children: [
     {path: '', redirectTo: 'categories', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent},
    {path: 'categories', component: CategoriesComponent}
   ]}
];

export const DistanceLearningRoutes = RouterModule.forChild(routes);
