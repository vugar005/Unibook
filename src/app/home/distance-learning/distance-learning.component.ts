import { Component, OnInit, HostBinding } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn} from 'ng-animate';

@Component({
  selector: 'app-distance-learning',
  templateUrl: './distance-learning.component.html',
  styleUrls: ['./distance-learning.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 0.4, delay: 0 }
    }))])
  ],
})

export class DistanceLearningComponent implements OnInit {
  type = 'speciality';
  faSearch = faSearch;
  @HostBinding('@fadeIn') animate = true;

  constructor() { }

  ngOnInit() {
  }

}
