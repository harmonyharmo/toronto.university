import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SidebarModule} from '../core/sidebar/sidebar.module';
import {SharedModule} from '../shared/shared.module';
import {TopbarModule} from '../core/topbar/topbar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,

    TopbarModule,
    SidebarModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
