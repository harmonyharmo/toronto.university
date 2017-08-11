import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
