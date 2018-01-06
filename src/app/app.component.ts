import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenav_links = [
    {url: '', icon: 'home', name: 'Home'},
    {url: 'referral', icon: 'person_add', name: 'Referral'},
    {url: 'contact', icon: 'email', name: 'Contact'},
    {url: 'about', icon: 'help_outline', name: 'About'},
  ];

  constructor() {
  }
}
