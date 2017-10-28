import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ContentComponent } from './content.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { MarkdownModule } from 'angular2-markdown';
import { SharedModule } from '../shared/shared.module';
import { ReferralComponent } from './referral/referral.component';
import { JoinComponent } from './join/join.component';
import { GuideComponent } from './guide/guide.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    MarkdownModule,
    SharedModule,
  ],
  declarations: [
    ContentComponent, AboutComponent, ReferralComponent, JoinComponent, GuideComponent, ExamComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
