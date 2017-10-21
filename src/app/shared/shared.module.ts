import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdTableModule } from '@angular/material';
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
    MdTableModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
