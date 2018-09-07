import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course =   {
    id: 2,
    name: 'JavaScript Algorithms and Data Structures Masterclass',
    shortInfo: `It is a long established fact that a reader will be distracted
    by the readable content  of a page when looking at its layout.
    The point of us that it has a more-or-less normal distribution of letters, as opposed to using...`,
    hours: 3,
    lessons: 75,
    tasks: 12,
    imgUrl: './assets/img/co-2.png',
    rating: 3,
    currentPrice: '9,99',
    originalPrice: 200
  };
  type = 'info';
  constructor() { }

  ngOnInit() {
  }

}
