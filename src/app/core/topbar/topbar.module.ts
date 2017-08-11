import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopbarComponent],
  exports: [TopbarComponent]
})
export class TopbarModule { }
