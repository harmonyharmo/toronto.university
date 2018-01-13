import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.location.href = 'https://docs.google.com/document/d/1PoSLaoBB7fXTiHUNYeCufoYixhAKUf18PHSwym3xeyM/edit?usp=sharing';
  }

}
