import {Component, OnInit} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})

export class ReferralComponent implements OnInit {

  foods: Food[] = [{value: 'banana', viewValue: 'Not asked'}, {value: 'ice cream', viewValue: 'Masked'}];

  constructor() {
  }

  ngOnInit() {
  }

}
