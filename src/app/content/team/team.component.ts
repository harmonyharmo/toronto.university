import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  names = [
    'Wednesday', 'Zidong Xie','Muyuan Cao', 'Bill Wang', 'Pwiyu Yu', "Yinling Luo", 
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
