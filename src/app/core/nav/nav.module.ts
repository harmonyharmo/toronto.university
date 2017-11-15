import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [MatToolbarModule, MatSidenavModule],
})
export class NavModule {
}
