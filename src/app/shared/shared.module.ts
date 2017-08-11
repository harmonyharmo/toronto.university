import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule
  ],
  declarations: [],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule
  ]
})
export class SharedModule {
}
