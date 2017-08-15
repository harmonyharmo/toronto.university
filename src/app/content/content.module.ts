import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ContactModule
  ],
  declarations: []
})
export class ContentModule { }
