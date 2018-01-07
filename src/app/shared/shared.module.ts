import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatTableModule
} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    AppRoutingModule
  ]
})
export class SharedModule {
}
