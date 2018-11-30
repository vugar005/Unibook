import { CoursePurchaseComponent } from './courses/course-item/course-detail/course-purchase/course-purchase.component';
import { CourseInfoComponent } from './courses/course-item/course-detail/course-info/course-info.component';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { DistanceLearningComponent } from './distance-learning.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './courses/course-item/course-detail/course-detail.component';
import { CourseContentComponent } from './courses/course-item/course-detail/course-content/course-content.component';

const routes: Routes = [
   {path: '', component: DistanceLearningComponent, children: [
     {path: '', redirectTo: 'categories', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/:id', component: CourseDetailComponent, children: [
      {path: '', redirectTo: 'info'},
      {path: 'info', component: CourseInfoComponent},
      {path: 'content', component: CourseContentComponent},
      {path: 'purchase', component: CoursePurchaseComponent},
    ]},
    {path: 'categories', component: CategoriesComponent}
   ]}
];

export const DistanceLearningRoutes = RouterModule.forChild(routes);
