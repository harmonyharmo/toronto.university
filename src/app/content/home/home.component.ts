import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {link: 'guide', title: 'User Guide'},
    {link: 'about', title: 'About'},
    {link: 'join', title: 'Join Us'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
