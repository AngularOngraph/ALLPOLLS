import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polls-voting',
  templateUrl: './polls-voting.component.html',
  styleUrls: ['./polls-voting.component.css']
})
export class PollsVotingComponent implements OnInit {
  public activeOpt1= false;
  public activeOpt2= false;
  public activeOpt3= false;
  public activeOpt4= false;
  constructor() { }

  ngOnInit(): void {
  }

  selectedIndex(index:number){
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
