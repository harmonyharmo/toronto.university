import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {MdSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {
}
