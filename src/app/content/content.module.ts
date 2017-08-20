import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ContentComponent } from './content.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ContactModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
