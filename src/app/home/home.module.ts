import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
} from '@angular/material';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
