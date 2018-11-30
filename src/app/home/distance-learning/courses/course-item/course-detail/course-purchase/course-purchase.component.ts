import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-course-purchase',
  templateUrl: './course-purchase.component.html',
  styleUrls: ['./course-purchase.component.scss']
})
export class CoursePurchaseComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  selected: number;
  cards = [
    {
      id: 0,
      bankName: 'BANK NAME',
      holderName: 'MR.NAME SURNAME',
      imgPath: '',
      expiration: 'MM/YY',
      type: 'visa'
    },
    {
      id: 1,
      bankName: 'BANK NAME',
      holderName: 'MR.NAME SURNAME',
      imgPath: '',
      expiration: 'MM/YY',
      type: 'mastercard'
    },
    {
      id: 2,
      bankName: 'BANK NAME',
      holderName: 'MR.NAME SURNAME',
      imgPath: '',
      expiration: 'MM/YY',
      type: 'mastercard'
    },
    {
      id: 3,
      bankName: 'BANK NAME',
      holderName: 'MR.NAME SURNAME',
      imgPath: '',
      expiration: 'MM/YY',
      type: 'visa'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
