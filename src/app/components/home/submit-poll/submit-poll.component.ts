import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-poll',
  templateUrl: './submit-poll.component.html',
  styleUrls: ['./submit-poll.component.css']
})
export class SubmitPollComponent implements OnInit {

  public activeOpt: boolean
  constructor() { 
    this.activeOpt = false;
  }

  ngOnInit(): void {
    
  }

}
