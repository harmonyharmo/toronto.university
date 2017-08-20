import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MdSidenavModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdSidenavModule,
    MdToolbarModule,
  ],
  exports: [MdToolbarModule, MdSidenavModule],
})
export class NavModule {
}
