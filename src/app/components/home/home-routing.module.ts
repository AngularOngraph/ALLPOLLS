import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/guards/no-auth.guard';
import { LandingComponent } from './landing/landing.component';
import { SubmitPollComponent } from './submit-poll/submit-poll.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', component: LandingComponent, canActivate: [NoAuthGuard]},
  { path: 'submit-poll', component: SubmitPollComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
