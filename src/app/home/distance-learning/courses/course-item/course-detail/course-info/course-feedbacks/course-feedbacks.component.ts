import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-feedbacks',
  templateUrl: './course-feedbacks.component.html',
  styleUrls: ['./course-feedbacks.component.scss']
})
export class CourseFeedbacksComponent implements OnInit {
  faEllipsis = faEllipsisV;
  constructor() { }

  ngOnInit() {
  }

}
