import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  faSearch = faSearch;
  courses = [
    {
      name: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
      shortInfo: `It is a long established fact that a reader will be distracted
      by the readable content  of a page when looking at its layout.
      The point of us that it has a more-or-less normal distribution of letters, as opposed to using...`,
      hours: 22,
      lessons: 186,
      tasks: 12,
      imgUrl: './assets/img/co-1.png',
      rating: 4.5,
      currentPrice: '19,99',
      originalPrice: 200
    },
    {
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
    },
    {
      name: 'JavaScript Algorithms and Data Structures Masterclass',
      shortInfo: `It is a long established fact that a reader will be distracted
      by the readable content  of a page when looking at its layout.
      The point of us that it has a more-or-less normal distribution of letters, as opposed to using...`,
      hours: 3,
      lessons: 75,
      tasks: 12,
      imgUrl: './assets/img/co-3.png',
      rating: 3,
      currentPrice: '9,99',
      originalPrice: 200
    },
    {
      name: 'Learning Hands-On Ruby & R In Data Science',
      shortInfo: `It is a long established fact that a reader will be distracted
      by the readable content  of a page when looking at its layout.
      The point of us that it has a more-or-less normal distribution of letters, as opposed to using...`,
      hours: 5.5,
      lessons: 75,
      tasks: 4,
      imgUrl: './assets/img/co-4.png',
      rating: 4.2,
      currentPrice: '19,99',
      originalPrice: 200
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
