import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
