import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SidebarModule} from '../core/sidebar/sidebar.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
