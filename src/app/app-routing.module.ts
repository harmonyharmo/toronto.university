import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './content/contact/contact.component';
import { AboutComponent } from './content/about/about.component';
import { ReferralComponent } from './content/referral/referral.component';
import { JoinComponent } from './content/join/join.component';
import { GuideComponent } from './content/guide/guide.component';
import { ExamComponent } from './content/exam/exam.component';
import { NotfoundComponent } from './content/notfound/notfound.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'referral', component: ReferralComponent},
  {path: 'join', component: JoinComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'exam', component: ExamComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      // {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
