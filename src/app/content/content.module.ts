import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ContentComponent } from './content.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { ReferralComponent } from './referral/referral.component';
import { JoinComponent } from './join/join.component';
import { GuideComponent } from './guide/guide.component';
import { ExamComponent } from './exam/exam.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotesComponent } from './notes/notes.component';
import { TeamComponent } from './team/team.component';
import { WikiComponent } from './wiki/wiki.component';
import { TradingComponent } from './trading/trading.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    MarkdownModule.forChild(),
    SharedModule,
    // AngularFireModule.initializeApp({ databaseURL: 'https://toronto-university.firebaseio.com/'}),
    // AngularFireDatabaseModule
  ],
  declarations: [
    ContentComponent,
    AboutComponent,
    ReferralComponent,
    JoinComponent,
    GuideComponent,
    ExamComponent,
    NotfoundComponent,
    NotesComponent,
    TeamComponent,
    WikiComponent,
    TradingComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
