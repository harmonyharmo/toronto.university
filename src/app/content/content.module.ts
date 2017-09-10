import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ContentComponent } from './content.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { MarkdownModule } from 'angular2-markdown';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    MarkdownModule,
    SharedModule
  ],
  declarations: [ContentComponent, AboutComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
