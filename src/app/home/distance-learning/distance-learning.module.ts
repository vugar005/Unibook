import { CourseDetailComponent } from './courses/course-item/course-detail/course-detail.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceLearningComponent } from './distance-learning.component';
import { DistanceLearningRoutes } from './distance-learning.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarRatingModule } from 'angular-star-rating';
import { CourseContentComponent } from './courses/course-item/course-detail/course-content/course-content.component';
import { CourseInfoComponent } from './courses/course-item/course-detail/course-info/course-info.component';
import { CourseFeedbacksComponent } from './courses/course-item/course-detail/course-info/course-feedbacks/course-feedbacks.component';

@NgModule({
  imports: [
    CommonModule,
    DistanceLearningRoutes,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    StarRatingModule.forRoot()
  ],
  declarations: [
    DistanceLearningComponent,
    CategoriesComponent,
    CoursesComponent,
    CourseItemComponent,
    CourseDetailComponent,
    CourseInfoComponent,
    CourseContentComponent,
    CourseFeedbacksComponent
  ]
})
export class DistanceLearningModule {}
