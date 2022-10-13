import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SubmitPollComponent } from './submit-poll/submit-poll.component';


@NgModule({
  declarations: [
    LandingComponent,
    SubmitPollComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
