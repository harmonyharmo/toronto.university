import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavModule } from './nav/nav.module';
import { MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
  ],
  exports: [NavModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
