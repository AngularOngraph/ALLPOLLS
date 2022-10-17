import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPollsComponent } from './add-polls/add-polls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollsVotingComponent } from './polls-voting/polls-voting.component';
import { ViewPollsComponent } from './view-polls/view-polls.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ViewPollsComponent},
      { path: 'add', component: AddPollsComponent},
      { path: 'vote-polls', component: PollsVotingComponent},
    ]
  }
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // { path: 'dashboard', component: DashboardComponent},
  // { path: 'register', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
