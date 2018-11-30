import { Component, OnInit } from '@angular/core';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {
  faPlayCircle = faPlayCircle;
 topics = [
 {
   name: 'Intro to Art Fundamentals',
   lectures: '16 Lectures  18 Videos'
},
{
  name: 'Art Fundamentals',
  lectures: '12 Lectures  10 Videos'
},
{
  name: 'Character Forms and Proportions',
  lectures: '16 Lectures  4 Videos'
},
{
  name: 'Gesture Drawing Foundations',
  lectures: '14 Lectures  8 Videos'
},
{
  name: 'Character Drawing Workflows',
  lectures: '16 Lectures  15 Videos'
}
 ];
 materials = [
 {
  name: 'Workflow 1: Two Stage Workflow',
  duration: '10:25'
 },
 {
  name: 'Workflow 2: Multi-Stage Workflow',
  duration: '07:32'
 },
 {
  name: 'DEMO Multi-Stage Workflow',
  duration: '15:41'
 },
 {
  name: 'DEMO RealTime Workflow',
  duration: '10:25'
 },
 {
  name: 'Finding Your Ideal Workflow',
  duration: '10:25'
 },
 {
  name: 'Module 5 assignments',
  duration: '10:25'
 }
 ];
 showMaterials = false;
 selectedTopic: number;
  constructor() { }

  ngOnInit() {
  }
  selectTopic(index: number) {
       this.showMaterials = true;
       this.selectedTopic = index;
  }

}
