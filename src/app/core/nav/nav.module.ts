import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import { MdSidenavModule, MdToolbarModule } from '@angular/material';
import { SidebarService } from './sidebar.service';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdSidenavModule,
    MdToolbarModule,
    AppRoutingModule
  ],
  declarations: [ToolbarComponent, SidebarComponent],
  exports: [ToolbarComponent, SidebarComponent, MdSidenavModule],
  providers: [SidebarService]
})
export class NavModule {
}
