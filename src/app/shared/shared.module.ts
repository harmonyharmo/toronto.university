import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
