import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
  ]
})
export class SharedModule {
}
