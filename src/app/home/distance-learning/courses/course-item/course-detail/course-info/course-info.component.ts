import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
 url: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer
    .bypassSecurityTrustUrl('https://codewithmosh.com/41629462-905d-43e4-a3af-800048ebf208');
  }

}
