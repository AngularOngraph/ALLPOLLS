import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewPollsComponent } from './view-polls/view-polls.component';
import { AddPollsComponent } from './add-polls/add-polls.component';


@NgModule({
  declarations: [
    ViewPollsComponent,
    AddPollsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
