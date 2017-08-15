import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  isOpen;

  constructor() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
