import { Component, OnInit, HostBinding } from '@angular/core';
import AOS from 'aos';
import { trigger, transition, useAnimation } from '@angular/animations';
import {fadeIn} from 'ng-animate';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 0.4, delay: 0 }
    }))])
  ],
})
export class MainPageComponent implements OnInit {
  @HostBinding('@fadeIn') animate = true;
  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
