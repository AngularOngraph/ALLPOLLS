import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-poll',
  templateUrl: './submit-poll.component.html',
  styleUrls: ['./submit-poll.component.css']
})
export class SubmitPollComponent implements OnInit {
  public activeOpt1= false;
  public activeOpt2= false;
  public activeOpt3= false;
  public activeOpt4= false;

  constructor() { 
  }

  ngOnInit(): void {
    
  }
  selectedIndex(index:number){
    this.activeOpt1= false;
    this.activeOpt2= false;
    this.activeOpt3= false;
    this.activeOpt4= false;

    if(index == 1){
      this.activeOpt1 =true;
    }else if(index == 2){
      this.activeOpt2 =true;
    }else if(index == 3){
      this.activeOpt3 =true;
    }else if(index == 4){
      this.activeOpt4 =true;
    }
  }
}
