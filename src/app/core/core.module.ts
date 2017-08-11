import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarModule} from './sidebar/sidebar.module';
import {TopbarModule} from './topbar/topbar.module';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    TopbarModule,
    SidebarModule
  ],
  // declarations: [TopbarComponent, SidebarComponent],
  exports: [TopbarModule, SidebarModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
