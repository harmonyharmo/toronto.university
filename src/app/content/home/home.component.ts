import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  internal_cards = [
    { link: 'guide', title: 'User Guide' },
    { link: 'about', title: 'About' },
    { link: 'join', title: 'Join Us' },
    { link: 'team', title: 'Team' },
    { link: 'notes', title: 'Course Notes' },
  ];
  external_cards = [
    { link: 'https://monkeykingg.github.io/', title: 'UTMap' },
    { link: 'https://docs.google.com/document/d/1PoSLaoBB7fXTiHUNYeCufoYixhAKUf18PHSwym3xeyM/edit?usp=sharing', title: 'Wiki' },
    { link: 'https://fas.calendar.utoronto.ca/listing-program-subject-areas', title: 'Programs' },
    { link: 'https://fas.calendar.utoronto.ca/sessional-dates', title: 'Calendar' },
    { link: 'https://utoronto-sp.blackboard.com/eAccounts/AccountSummary.aspx?menu=0', title: 'Top-up Tcard' },
    { link: 'https://course-evals.utoronto.ca/BPI/fbview.aspx?blockid=seipDRPeug8Eu', title: 'Course Evaluation' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
