import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewPollsComponent } from './view-polls/view-polls.component';
import { AddPollsComponent } from './add-polls/add-polls.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollsVotingComponent } from './polls-voting/polls-voting.component';


@NgModule({
  declarations: [
    ViewPollsComponent,
    AddPollsComponent,
    DashboardComponent,
    PollsVotingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
