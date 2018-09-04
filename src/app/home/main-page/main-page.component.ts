import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
