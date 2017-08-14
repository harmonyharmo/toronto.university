import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  isOpen = true;

  constructor() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
